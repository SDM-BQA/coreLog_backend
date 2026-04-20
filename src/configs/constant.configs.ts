interface ModelType{
    user:"User"
}

export type ModelNames = ModelType[keyof ModelType];


export const models_constant: ModelType = {
    user: "User"
}