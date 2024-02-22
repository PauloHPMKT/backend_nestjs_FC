/**
 * DTO - Data Transfer Object
 * é utilziado para transportar dados
 * geralmente repassamos para ele o que é preciso para 
 * criar, instanciar, ou simplemnte tipar um documento
 */
export class CreateRouteDto {
    name: string
    source_id: string
    destination_id: string
}
