
declare interface PairProps { pairsAvailable: string[], handleChange: FormEventHandler }
declare interface ProviderProps { providers: string[], handleChangeProviders: Function }
declare interface DatepickerProps {
    title: string, 
    name: string, 
    dateValue: Date, 
    handleChange: FormEventHandler,
    min: Date,
    max: Date
}