// IoC
import { IocTypes } from "@/shared/diconfig/ioc-types";
import { injectable, inject } from "inversify";
import "reflect-metadata";




import { ICodeGeneratorService } from "../codeGeneratorServeice/ICodeGeneratorService";
import { IFunctionService } from "../functionservice/IFunctionService";
import { IMenuService } from "../menuserveice/IMenuService";
import { IRoleService } from "../roleservice/IRoleService";
import { ISystemService } from '../systemservice/ISystemService';
import { IUserService } from "../userservice/IUserService";
@injectable()
export class MainService {
  private _menuserverceApi: IMenuService;
  private _userserverceApi: IUserService;
  private _codeGeneratorService: ICodeGeneratorService;
  private _roleService: IRoleService;
  private _functionService: IFunctionService;
 private  _systemService:ISystemService;

  public get MenuServiceApi(): IMenuService {
    return this._menuserverceApi;
  }
  public get UserServiceApi(): IUserService {
    return this._userserverceApi;
  }

  public get CodeGeneratorService(): ICodeGeneratorService {
    return this._codeGeneratorService;
  }

  public get RoleService(): IRoleService {
    return this._roleService;
  }

  public get FunctionService(): IFunctionService {
    return this._functionService;
  }

  public get SystemService():ISystemService{

    return this._systemService;

  }
  

  /**
   * 好几巴垃圾不能自动注入呢？？？？？？？？？
   * @param _menu
   * @param _user
   * @param _codeGenerator
   */
  constructor(
    @inject(IocTypes.MenuService) _menu: IMenuService,
    @inject(IocTypes.UserService) _user: IUserService,
    @inject(IocTypes.CodeGeneratorService)
    _codeGenerator: ICodeGeneratorService,
    @inject(IocTypes.RoleService) _roleService: IRoleService,
    @inject(IocTypes.FunctionService) _functionService: IFunctionService,
    @inject(IocTypes.SystemService) _systemService:ISystemService
  ) {
    this._menuserverceApi = _menu;
    this._userserverceApi = _user;
    this._codeGeneratorService = _codeGenerator;
    this._roleService = _roleService;
    this._functionService = _functionService;
    this._systemService=_systemService;
 
  }
}
