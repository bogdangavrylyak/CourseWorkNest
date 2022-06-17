import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoilModule } from './soil/soil.module';
import { CharacteristicModule } from './characteristic/characteristic.module';
import { CharacteristicValueModule } from './characteristic_value/characteristic_value.module';
import { MaterialTypeModule } from './material_type/material_type.module';
import { SortModule } from './sort/sort.module';
import { MaterialModule } from './material/material.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { DepartmentModule } from './department/department.module';
import { PositionModule } from './position/position.module';
import { EmployeeModule } from './employee/employee.module';
import { CustomerModule } from './customer/customer.module';
import { ContractModule } from './contract/contract.module';
import { LandscapeworkModule } from './landscapework/landscapework.module';
import { CompanySupplierModule } from './company-supplier/company-supplier.module';
import { OrderModule } from './order/order.module';
import { DeliveredMaterialsModule } from './delivered-materials/delivered-materials.module';
import { StatusModule } from './status/status.module';
import { WorkProcessModule } from './work-process/work-process.module';
import { MaterialCharacteristicValueModule } from './material-characteristic-value/material-characteristic-value.module';
import { ContractLandscapeWorkModule } from './contract-landscape-work/contract-landscape-work.module';
import { MaterialContractLandscapeWorkModule } from './material-contract-landscape-work/material-contract-landscape-work.module';
import { OrderedMaterialsModule } from './ordered-materials/ordered-materials.module';
import { WorkProcessEmployeeModule } from './work-process-employee/work-process-employee.module';
import { WorkProcessMaterialModule } from './work-process-material/work-process-material.module';

@Module({
  imports: [
    SoilModule,
    CharacteristicModule,
    CharacteristicValueModule,
    MaterialTypeModule,
    SortModule,
    MaterialModule,
    CityModule,
    AddressModule,
    DepartmentModule,
    PositionModule,
    EmployeeModule,
    CustomerModule,
    ContractModule,
    LandscapeworkModule,
    CompanySupplierModule,
    OrderModule,
    DeliveredMaterialsModule,
    StatusModule,
    WorkProcessModule,
    MaterialCharacteristicValueModule,
    ContractLandscapeWorkModule,
    MaterialContractLandscapeWorkModule,
    OrderedMaterialsModule,
    WorkProcessEmployeeModule,
    WorkProcessMaterialModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
