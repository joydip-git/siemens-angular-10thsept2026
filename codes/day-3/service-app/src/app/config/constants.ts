import { InjectionToken } from "@angular/core";
import { PersonService, ServiceContract } from "../services/person-service";

//export const TOKEN = PersonService
//export const TOKEN = 'TOKEN'
export const TOKEN = new InjectionToken<ServiceContract>('TOKEN')
export const SERVICE = PersonService