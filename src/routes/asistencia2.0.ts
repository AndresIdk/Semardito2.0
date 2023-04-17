import { AccederSheet, EscribirSheet } from "../controllers/asistencia_control_sheet";

// Importar interface ASISTENCIA
import { Asistencia } from "../interfaces/interfaces_asistencia";

export const AccederSheets = async () => {
    // Se listan los registros
    AccederSheet()
}

export const EscribirSheets = async (data: Asistencia) => {
    // Se añade registro nuevo
    EscribirSheet(data)
}