import express from 'express';

import { InterviewAnalysis } from '../controllers/api/symbl/InterviewAnalysis/zoomApi.js'
const router = express.Router();


router.post('/interviewAnalysis', InterviewAnalysis);

export default router;