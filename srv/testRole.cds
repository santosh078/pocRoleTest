using { test as external} from './external/test.csn';

// 
service MyService@(path:'/testSrv')@(requires:'authenticated-user'){
    entity Products as projection on external.Products;
  function getEmpInfo() returns String;
}