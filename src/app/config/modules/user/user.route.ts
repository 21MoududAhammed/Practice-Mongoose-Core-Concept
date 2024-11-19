import express from 'express';
import { UserControllers } from './user.controller';
// declare a router
const router = express.Router();

// create a route
router.post('/user', UserControllers.createSingleUser);

export const StudentRoutes = router;
