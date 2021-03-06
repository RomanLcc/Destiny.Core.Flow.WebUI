export const UserApi = {
  // 分页 + 条件获取用戶列表
  getUserPage: "api/User/GetUserPageAsync",
  /**
   * 添加用户
   */
  createrUser: "api/User/CreateAsync",
  /**
   * 获取一个用户
   */
  loadUser: "api/User/LoadAsync",
  /**
   * 删除一个用户
   */
  deleteUser: "api/User/DeleteAsync",
  /**
   * 修改用户
   */
  updateUser: "api/User/UpdateAsync",
  /**
   * 用戶分配角色
   */
  userAllocationRole: "api/User/AllocationRoleAsync",
};

//代码生成器API
export const CodeGeneratorApi = {
  //得到C#类型转成下拉项
  GetCSharpTypeToSelectItem: "api/CodeGenerator/GetCSharpTypeToSelectItem",

  //生成代码
  GenerateCode: "api/CodeGenerator/GenerateCode",
};

///角色API
export const RoleApi = {
  // 分页 + 条件获取角色列表
  getRolePage: "api/Role/GetRolePageAsync",
  /**
   * 添加或者修改角色
   */
  createrOrUpdateRole: "api/Role/AddOrUpdateAsync",

  /**
   * 删除一个角色
   */
  deleteRole: "api/Role/DeleteAsync",
  /**
   * 获取所有的角色
   */
  getAllRole: "api/Role/GetRoleSelectListAsync",

  /**
   * 设置角色菜单
   */
  setRoleMenu: "api/Role/SetRoleMenuAsync",
};

export const MenuApi = {
  /**
   * 获取表格菜单信息
   */
  getTable: "api/Menu/GetTableAsync",
  /**
   * 添加菜单
   */
  addMenu: "api/Menu/AddMenuAsync",
  /**
   * 修改菜单
   */
  updateMenu: "api/Menu/UpdateMenuAsync",
  /**
   * 删除
   */
  delete: "api/Menu/DeleteAsync",
  /**
   * 异步加载表单菜单
   */
  loadFormMenu: "api/Menu​/LoadFormMenuAsync",
  /**
   * 登录成功之后获取菜单
   */
  getMenu: "api/Menu/GetMenuAsync",
  /**
   * 登录成功之后获取用户菜单树
   */
  getUserMenuTree: "api/Menu/GetUserMenuTreeAsync",
  /**
   * 异步得到菜单树数据
   */
  getMenuTree: "api/Menu/GetMenuTreeAsync",
  /**
   * 异步得到菜单下的按钮
   */
  getMenuChildrenButton: "api/Menu/GetMenuChildrenButtonAsync",
  /**
   * 获取登录用户权限菜单
   */
  getMenuList: "api/Menu/GetMenuListAsync",
  /**
   * 异步到菜单功能集合
   */
  getMenuFunctionList: "api/Menu/GetMenuFunctionListAsync",
  /**
   * 异步得到菜单分页数据（不是树，只是普通表格）
   */
  getMenuPage:"/api/Menu/GetMenuPageAsync",
  /**
   * 获取所有菜单
   */
  GetAllMenuTree:"/api/Menu/GetAllMenuTreeAsync",
};

///功能API
export const FunctionApi = {
  // 分页 + 条件获取功能列表
  getFunctionPage: "api/Function/GetFunctionPageAsync",
  /**
   * 添加或者修改功能
   */
  createrOrUpdateFunction: "api/Function/AddOrUpdateAsync",

  /**
   * 删除一个功能
   */
  deleteFunction: "api/Function/DeleteAsync",
 
    /**
   * 获取一个功能
   */
  loadFunction: "api/Function/LoadAsync",
};


///审计API
export const AuditApi = {
  // 分页 + 条件获取功能列表
  getAuditLogPage: "api/AuditLog/GetAuditLogPageAsync",
  // 得到数据审计分页
  getAuditEntryPage: "api/AuditEntry/GetAuditEntryPageAsync",

   // 得到数据属性分页
  getAuditEntryPropertyPage: "api/AuditEntry/GetAuditEntryPropertyPageAsync",
};
