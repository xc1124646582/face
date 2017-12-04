import {sendMessage,gotoPage,gotoIndex} from './app/AppAction';
import {login,logout} from './login';
import {initOu,addOu,removeOu,removeOus,selectOu,editOu,initAllOu} from './system/OuAction';
import {initDepartment,selectDepartment,addDepartment,editDepartment,removeDepartment,removeDepartments,initAllDepartment} from './system/DepartmentAction';
import {initUser,selectUser,removeUser,removeUsers,addUser,editUser} from './system/UserAction';
import {initAreaCamera,removeAreaCamera,addAreaCamera,editAreaCamera,AreaCameraStatus,selectAreaCamera} from './device/IdentificationAction';
import {initDeviceCamera,removeDeviceCamera,addDeviceCamera,editDeviceCamera,DeviceCameraStatus,DeviceCameraSet,selectDeviceCamera,initDeviceCameraAll} from './device/FanalysisAction';
import {initServer,removeServer,addServer,editServer,ServerStatus,selectServer,initServerall} from './device/FnetcameraAction';
import {initStatus} from './device/StatusAction';
// import {initFaceb,selectFaceb,removeFaceb,removeFacebs,addFaceb,editFaceb} from './facedb/FacebAction';
// import {initPhotodb,selectPhotodb,removePhotodb,removePhotodbs,addPhotodb,editPhotodb,initRepo} from './facedb/PhotodbAction';
import {initSetup,selectSetup,addSetup,removeSetup,removeSetups,editSetup,seleccompanyId } from './deploy/SetupAction';
import {initPolice,initAllPolice,selectPolice,addPolice,removePolice,removePolices,editPolice } from './deploy/PoliceAction';
import {addWarning,initWarning,editWarning,removeWarning} from './deploy/FwarningAction';
import {initQuery,addface,faceRemove} from './face/faceAction';
import {initControl,videoUrl} from './face/ControlAction';
import {initPeoplese,addPeoplese,editPeoplese,removePeoplese} from './people/peopleseAction';
export {
    sendMessage,
    gotoPage,
    gotoIndex,
    login,
    initOu,
    addOu,
    removeOu,
    removeOus,
    selectOu,
    editOu,
    initDepartment,
    selectDepartment,
    addDepartment,
    editDepartment,
    removeDepartment,
    removeDepartments,
    initAllDepartment,
    selectUser,
    removeUser,
    removeUsers,
    addUser,
    editUser,
    initUser,
    initAreaCamera,
    AreaCameraStatus,
    selectAreaCamera,
    removeAreaCamera,
    addAreaCamera,
    editAreaCamera,
    initDeviceCamera,
    DeviceCameraStatus,
    removeDeviceCamera,
    addDeviceCamera,
    editDeviceCamera,
    selectDeviceCamera,
    initDeviceCameraAll,
    DeviceCameraSet,
    initServer,
    ServerStatus,
    selectServer,
    initServerall,
    removeServer,
    addServer,
    editServer,
    initStatus,
    initAllOu,
    // initFaceb,
    // selectFaceb,
    // removeFaceb,
    // removeFacebs,
    // addFaceb,
    // editFaceb,
    // initPhotodb,
    // selectPhotodb,
    // removePhotodb,
    // removePhotodbs,
    // addPhotodb,
    // editPhotodb,
    // initRepo,
    initSetup,
    selectSetup,
    addSetup,
    removeSetup,
    removeSetups,
    editSetup,
    initPolice,
    selectPolice,
    addPolice,
    removePolice,
    removePolices,
    editPolice,
    initAllPolice,
    logout,
    addWarning,
    editWarning,
    initWarning,
    seleccompanyId,
    initQuery,
    addface,
    faceRemove,
    initControl,
    videoUrl,
    initPeoplese,
    addPeoplese,
    editPeoplese,
    removePeoplese,
    removeWarning






};