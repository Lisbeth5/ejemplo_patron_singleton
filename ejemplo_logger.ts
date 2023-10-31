class Logger {
    // Variable estática para almacenar la única instancia
    private static instance: Logger;

    // Arreglo para almacenar los registros
    private logStore:any = []

    // Constructor privado para evitar la creación de instancias directas
    private constructor() { }

    // Método estático para obtener la instancia del Logger
    public static getInstance(): Logger {

        // Si la instancia no existe, crear una nueva
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        // Devolver la instancia existente o la nueva
        return Logger.instance;
    }
     // Método para agregar un registro al Logger
    public log(item: any): void{
        this.logStore.push(item)
    }

     // Método para obtener todos los registros almacenados
    public getLog():void{
        console.log(this.logStore)
    }
}
 // Ejemplo de uso
const useLogger = Logger.getInstance()
useLogger.log('Log 1')
const anotherLogger = Logger.getInstance()
anotherLogger.log('Log 2')
useLogger.getLog()