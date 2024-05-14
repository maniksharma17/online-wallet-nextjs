import zod from "zod"

const userSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6),
    number: zod.string().min(10)
})

export default userSchema