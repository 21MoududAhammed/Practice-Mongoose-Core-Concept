import express from 'express';
import { UserControllers } from './user.controller';
// declare a router
const router = express.Router();

// create a route
router.post('/user', UserControllers.createSingleUser);

// get all users route
router.get('/', UserControllers.getAllUsers);

// route to get a user based on user id
router.get('/:userId', UserControllers.getSingleUser);

export const UserRoutes = router;
