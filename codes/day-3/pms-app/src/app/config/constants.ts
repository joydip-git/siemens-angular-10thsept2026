import { InjectionToken } from "@angular/core"
import { ServiceContract } from "../modules/products/services/service-contract"
import { ProductService } from "../modules/products/services/product-service"

export const TOKEN = new InjectionToken<ServiceContract>('TOKEN')
export const SERVICE = ProductService