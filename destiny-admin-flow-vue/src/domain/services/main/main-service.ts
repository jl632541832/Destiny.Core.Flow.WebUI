// IoC
import { IocTypes } from "@/shared/diconfig/ioc-types";
import { Form, Icon } from "ant-design-vue";
import { injectable, inject } from "inversify";
import "reflect-metadata";

import { ICodeGeneratorService } from "../codeGeneratorServeice/ICodeGeneratorService";
import { IDataDictionaryService } from "../dataDictionaryServeice/IDataDictionaryService";
import { IDestinyCoreServeice } from "../destinycoreserveice/IDestinyCoreServeice";
import { IFunctionService } from "../functionservice/IFunctionService";
import { IApiResourceService } from "../IdentityServer4/apiresourceservice/IApiResourceService";
import { IClientApplicationService } from "../IdentityServer4/clientapplicationsevice/IClientapplicationsevice";
import { IMenuService } from "../menuserveice/IMenuService";
import { IOrganizationService } from "../organizationservice/IOrganizationService";
import { IRoleService } from "../roleservice/IRoleService";
import { ISystemService } from "../systemservice/ISystemService";
import { IUserService } from "../userservice/IUserService";
import {IDocumentTypeServeice} from "../documentTypeServeice/IDocumentTypeServeice";
@injectable()
export class MainService {
  private _menuserverceApi: IMenuService;
  private _userserverceApi: IUserService;
  private _codeGeneratorService: ICodeGeneratorService;
  private _roleService: IRoleService;
  private _functionService: IFunctionService;
  private _systemService: ISystemService;
  private _dataDictionaryService: IDataDictionaryService;
  private _organizationService: IOrganizationService;
  private _destinyCoreServeice: IDestinyCoreServeice;
  private _apiResourceService: IApiResourceService;
  private _clientApplicationService: IClientApplicationService;
  private _documentTypeServeice:IDocumentTypeServeice;

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

  public get SystemService(): ISystemService {
    return this._systemService;
  }

  public get DataDictionaryService(): IDataDictionaryService {
    return this._dataDictionaryService;
  }

  public get DestinyCoreServeice(): IDestinyCoreServeice {
    return this._destinyCoreServeice;
  }
  public get OrganizationService(): IOrganizationService {
    return this._organizationService;
  }

  public get ApiResourceService(): IApiResourceService {
    return this._apiResourceService;
  }
  public get ClientApplicationService(): IClientApplicationService {
    return this._clientApplicationService;
  }

  public get DocumentTypeServeice():IDocumentTypeServeice
  {
 
     return this._documentTypeServeice;

  }
  /**
   *
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
    @inject(IocTypes.SystemService) _systemService: ISystemService,
    @inject(IocTypes.DataDictionaryService)
    _dataDictionaryService: IDataDictionaryService,
    @inject(IocTypes.OrganizationService)
    _organizationService: IOrganizationService,
    @inject(IocTypes.DestinyCoreServeice)
    _destinyCoreServeice: IDestinyCoreServeice,
    @inject(IocTypes.ApiResourceService)
    _apiResourceService: IApiResourceService,
    @inject(IocTypes.ClientApplicationService)
    _clientApplicationService: IClientApplicationService,
    @inject(IocTypes.DocumentTypeServeice)
    _documentTypeServeice:IDocumentTypeServeice

  ) {
    this._menuserverceApi = _menu;
    this._userserverceApi = _user;
    this._codeGeneratorService = _codeGenerator;
    this._roleService = _roleService;
    this._functionService = _functionService;
    this._dataDictionaryService = _dataDictionaryService;
    this._organizationService = _organizationService;
    this._systemService = _systemService;
    this._destinyCoreServeice = _destinyCoreServeice;
    this._apiResourceService = _apiResourceService;
    this._clientApplicationService=_clientApplicationService;
    this._documentTypeServeice=_documentTypeServeice;
  }
}
