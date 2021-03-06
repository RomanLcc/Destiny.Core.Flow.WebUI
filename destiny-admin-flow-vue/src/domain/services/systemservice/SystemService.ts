import { IAuditEntryOutputPageDto, IAuditEntryPropertyOutputPageDto, IAuditLogOutputPageDto } from '@/domain/entity/auditdto/auditDto';

import { AuditApi } from '@/domain/config/api';
import { IPageRequest } from '@/shared/request';
import { IServerPageReturn } from '@/shared/response';
import { ISystemService } from './ISystemService';
import { MainManager } from '../main/main-manager';
import { injectable } from 'inversify';

@injectable()
export default class SystemService implements ISystemService {
    getAuditLogPage(_page: IPageRequest): Promise<IServerPageReturn<IAuditLogOutputPageDto[]>> {
        return MainManager.dataRequest.postRequest(AuditApi.getAuditLogPage,_page);
    }
   
    getAuditEntryPage(_page:IPageRequest):Promise<IServerPageReturn<IAuditEntryOutputPageDto[]>>
    {

        return MainManager.dataRequest.postRequest(AuditApi.getAuditEntryPage,_page);
    }

    getAuditEntryPropertyPage(_page:IPageRequest):Promise<IServerPageReturn<IAuditEntryPropertyOutputPageDto[]>>
    {

        return MainManager.dataRequest.postRequest(AuditApi.getAuditEntryPropertyPage,_page);
    }
}