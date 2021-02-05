<?php

namespace App\Http\Controllers;

use App\CoursePlanModel;
use App\Model\CourseFeatureModel;

use App\PaymentGuideModel;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    function getCourseFeatures(){
        $result = CourseFeatureModel::all();
        return $result;
    }

    function getCoursePlan(){
       $result =CoursePlanModel::all();
       return $result;
    }

    function getPaymentGuide(){
        $result = PaymentGuideModel::all();
        return $result;
    }
}
