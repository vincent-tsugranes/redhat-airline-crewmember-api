import * as express from 'express';
import * as luxon from 'luxon';
const url = require('url');

import { Crewmember } from '../entity/crewmember';
import crewData from '../..//data/crewmembers.json';

class CrewmemberController {
  public router = express.Router();
  public path = '/crewmembers';

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.allCrewmembers);
    this.router.get(this.path + '/:id', this.getCrewmember);
  }

  allCrewmembers = (request: express.Request, response: express.Response) => {
    let crewmembers: Crewmember[] = new Array<Crewmember>();
    crewData.crewmembers.forEach((crewJson) => {
      let crew: Crewmember = new Crewmember();
      crew.id = crewJson.id;
      crew.first_name = crewJson.first_name;
      crew.last_name = crewJson.last_name;
      crew.rating = crewJson.rating;
      crew.base = crewJson.base;
      crew.id = crewJson.id;
      crew.img = crewJson.img;

      crewmembers.push(crew);
    });
    response.send(crewmembers);
  };

  getCrewmember = (request: express.Request, response: express.Response) => {
    const id: number = +request.params.id;
    const crewJson = crewData.crewmembers.find((c) => c.id == id);
    if (crewJson != undefined) {
      let crew: Crewmember = new Crewmember();
      crew.id = crewJson.id;
      crew.first_name = crewJson.first_name;
      crew.last_name = crewJson.last_name;
      crew.rating = crewJson.rating;
      crew.base = crewJson.base;
      crew.id = crewJson.id;
      crew.img = crewJson.img;
      response.send(crew);
    } else {
      response.send('Crewmember does not exist');
    }
  };
}

export default CrewmemberController;
