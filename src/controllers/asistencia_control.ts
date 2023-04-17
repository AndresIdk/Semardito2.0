import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet } from "google-spreadsheet";
import { Asistencia } from "../interfaces/interfaces_asistencia";

// Credenciales de acceso a la API
const credenciales = require('../keys/key.json')

// ID de la sheet de asistencia
let googleID: string = '19dlXaw_u--9j8_W9uCdbfd0qXP2toUY9Hd-q-Hbyvpw'

// Funcion para obtener la sheet
const showInfo = async (): Promise<GoogleSpreadsheetWorksheet | any> => {
    try {
        // Creo instancia de documento
        const documento = new GoogleSpreadsheet(googleID)

        // Espero la confirmacion de permisos
        await documento.useServiceAccountAuth(credenciales)

        // Obtener la informacion
        await documento.loadInfo()

        // Obtengo la hoja 1 (Sheet 1)
        const sheet = documento.sheetsByIndex[0]

        return sheet
    } catch (error) {
        console.error('Se ha presentado el siguiente error: ', error)
        return error
    }
}

// Metodo para listar la sheet
export const AccederSheet = async (): Promise<any> => {

    try {
        const sheet = await showInfo()
        if (typeof sheet === "object") {
            const registros = await sheet.getRows()

            // Retorno registros
            return registros
        } else {
            console.error('TODO MAL')
        }

    } catch (e) {
        console.error('Se presentó el siguiente error: ', e)
        return e
    }
}

// Metodo para actualizar sheet
export const EscribirSheet = async (data: Asistencia): Promise<any> => {
    try {
        const sheet = await showInfo()
        if (typeof sheet === "object") {

            // Example
            // await sheet.addRow({
            //     "Nombre": "jh",
            //     "Dia": "2",
            //     "Mes": "3",
            //     "Año": "2023"
            // })

            // Añadir registro a la sheet
            await sheet.addRow(data)
        } else {
            console.error('TODO MAL')
        }

    } catch (e) {
        console.error('Se presentó el siguiente error: ', e)
        return e
    }
}
