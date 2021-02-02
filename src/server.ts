import express, {Request, Response} from 'express';
import * as env from 'env-var';
import * as pino from 'pino';
import * as path from 'path';
import cors from "cors";
import CrewmemberController from './routes/crewmembercontroller';

const PORT = env.get('PORT').default('9002').asPortNumber();

// const app = express();
export const app: express.Application = express();

app.use(cors());

// Add kubernetes liveness and readiness probes at
// /api/health/readiness and /api/health/liveness
require('kube-probe')(app);

// Include sensible security headers by default
app.use(require('helmet')());
// Log incoming requests
app.use(require('morgan')('combined'));

let crewmemberController = new CrewmemberController();
app.use('/', crewmemberController.router);

app.listen(PORT, () => {
  console.log(`🚀 server listening on port ${PORT}`);
});
