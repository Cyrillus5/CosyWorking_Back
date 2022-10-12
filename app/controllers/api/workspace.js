const workspaceDatamapper = require("../../Datamapper/workspace");
const equipmentDatamapper = require("../../Datamapper/equipment");
const imageDatamapper = require("../../Datamapper/image");
const securityDatamapper = require('../../Datamapper/security');


const mapServices = require("../../services/mapServices");
const { stringify } = require("querystring");

module.exports = {

  async findById(req, res) {
    const workspaceId = req.params.id;

    const workspace = await workspaceDatamapper.getWorkspaceByPk(workspaceId);

    res.json(workspace);

  },

  async findWorkspacesByHost(req, res) {

    if (req.userId !== parseInt(req.params.hostid) ) {
      return res.json({message : "nope"});
    }

    const hostId = req.params.hostid;

    const workspaces = await workspaceDatamapper.getWorkspacesByHostId(hostId);

    res.json(workspaces);
  },

  async create(req, res) {
    const workspaceToCreate = req.body;
    workspaceToCreate.user_id = req.userId;
    
    const coordinates = await mapServices.findLocation(req.body.address,req.body.zip_code, req.body.city);

    workspaceToCreate.latitude = coordinates.latitude;
    workspaceToCreate.longitude = coordinates.longitude;

    // Equipements
    const { equipments } = workspaceToCreate;
    delete workspaceToCreate.equipments;
    
    const workspaceInstance = await workspaceDatamapper.create(workspaceToCreate);
    
    const workspaceId = workspaceInstance[0].id;

    if (equipments) {
      // console.log(equipments);
      // const equipment_list = equipments.split(',');
      await equipmentDatamapper.associateWorkspaceToEquipment(workspaceId, equipments);
    }
    

    await imageDatamapper.addImage(workspaceId, req.files);
    
    res.json(workspaceInstance);
  },

  async findRandom(_, res) {
    const workspaces = await workspaceDatamapper.getRandom();
    res.json(workspaces);
  },

  async updateOne(req, res) {
    const workspaceId = parseInt(req.params.id);
    const updatedWorkspace = req.body;
    const { equipments } = updatedWorkspace;
    const equipmentList = equipments.split(',');

    delete updatedWorkspace.equipments;

    const isAuthorizedToUpdate = await securityDatamapper.checkWorkspaces(req.userId, workspaceId);

    if (!isAuthorizedToUpdate) {
      return res.status(403).send({
        message: "This is not your workspace ! "
      });
    }

    await equipmentDatamapper.update(workspaceId, equipmentList);

    const result = await workspaceDatamapper.patchOne(workspaceId, updatedWorkspace);

    res.json(result);
  },

  async updateState(req, res) {
    const workspaceId = parseInt(req.params.id);
    const newState = req.body.availability;

    const isAuthorizedToUpdate = await securityDatamapper.checkWorkspaces(req.userId, workspaceId);

    if (!isAuthorizedToUpdate) {
      return res.status(403).send({
        message: "This is not your workspace ! "
      });
    }

    await workspaceDatamapper.patchState(workspaceId, newState);

    res.json({message: `The workspace availabilty was succussfully changed to ${req.body.availability}`});
  },

  async searchWorkspaces(req, res) {
    const searchDetails = req.body;

    const workspacesAvailable = await workspaceDatamapper.getWorkspacesFromSearch(searchDetails);

    res.json(workspacesAvailable);
  },

  async addImages(req, res) {
    const workspaceId = parseInt(req.params.id);

    let result;

    if (req.files[0].fieldname.includes("mainImage")) {
      result =  await imageDatamapper.updateMainImage(workspaceId, req.files);
    } else {
      result = await imageDatamapper.updateImages(workspaceId, req.files);
    }

    res.json(result);

  }

}