
const server = 'http://localhost:8080/face';
// const server = 'http://192.168.1.121:8080/face';
//const server = 'http://127.0.0.1:8089/face';
export default{
    login:()=>{

        return server+'/users/login';
    
    },
    getInitUserApi:()=>{

        return server+'/system/user';
    
    },
    addUserApi:()=>{

        return server+'/system/user';
    
    },
    selectUserApi:()=>{

        return server+'/system/user';
    
    },
    removeUserApi:()=>{

        return server+'/system/user';
    
    },
    removeUsersApi:()=>{

        return server+'/system/user';
    
    },
    editUserApi:()=>{

        return server+'/system/user';

    },  
    getInitUsergroupApi:()=>{

        return server+'/system/usergroup';
        
    } ,
    selectUsergroupApi:()=>{

        return server+'/system/usergroup';
        
    } ,
    addUsergroupApi:()=>{

        return server+'/system/usergroup';
        
    },
    UsergroupApi:()=>{

        return server+'/system/usergroup';
        
    },
    RoleApi:()=>{

        return server+'/system/role';
        
    },
    privilegeApi:()=>{

        return server+'/system/privilege';
        
    },
    resourceApi:()=>{

        return server+'/system/resource';
        
    },
    departmentApi:()=>{

        return server+'/system/department';
        
    },
    // companyApi:()=>{

    //     return server+'/system/company';
        
    // },
    areaCameraApi:()=>{

        return server+'/device/camera/area';
        
    },
    deviceCameraApi:()=>{

        return server+'/device/camera';
        
    }, 
    serverApi:()=>{

        return server+'/device/servicer';
        
    },
    repoApi:()=>{

        return server+'/face/repo';
        
    },
    facebApi:()=>{

        return server+'/face/photo/repo';
        
    },
    photodbApi:()=>{

        return server+'/face/base/repo';
        
    },
    setupApi:()=>{

        return server+'/layout/setup';
        
    },
    policeApi:()=>{

        return server+'/layout/police';
        
    },

    //单位管理
    companiesApi:()=>{

        return server+'/companies';
        
    },
    companyApi:()=>{

        return server+'/company';
        
    },
    //部门管理
    departmentsApi:()=>{

        return server+'/department';
        
    },

    //识别服务器
    IdentificationApi:()=>{

        return server+'/identifications';
        
    },
    addIdentificationApi:()=>{

        return server+'/identification';
        
    },

    //分析服务器
    analysisApi:()=>{

        return server+'/analysis';
        
    },
    //网络摄像头
    netcameraApi:()=>{

        return server+'/netcameras';
        
    },
    addnetcameraApi:()=>{

        return server+'/netcamera';
        
    },
    //设备状态
    statusApi:()=>{

        return server+'/device/status';
        
    }
};