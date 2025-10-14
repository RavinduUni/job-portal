import express from 'express'
import { changeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js';
import upload from '../config/multer.js';
import { protectCompany } from '../middlewares/authMiddleware.js';

const companyRouter = express.Router();

//Register a company
companyRouter.post('/register',upload.single('image'), registerCompany);

//Company login
companyRouter.post('/login', loginCompany);

//Get company data
companyRouter.get('/company',protectCompany, getCompanyData);

//Post a job
companyRouter.post('/post-job',protectCompany, postJob);

//Get Applicants Data of Company
companyRouter.get('/applicants',protectCompany, getCompanyJobApplicants);

//Get Company Job List
companyRouter.get('/list-jobs',protectCompany, getCompanyPostedJobs);

//Change Applicationa Status
companyRouter.post('/change-status',protectCompany, changeJobApplicationStatus);

//Change Applications Visibility
companyRouter.post('/change-visibility',protectCompany, changeVisibility);

export default companyRouter;