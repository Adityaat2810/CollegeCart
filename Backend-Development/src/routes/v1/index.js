import express from 'express'

const router = express.Router();

import {signUp, signIn , isAuthenticated} from '../../controller/user-controller.js'

router.post("/user/signup", signUp);
router.post('/user/signin', signIn);
router.post('/user/isAuthenticated', isAuthenticated);


export default router;