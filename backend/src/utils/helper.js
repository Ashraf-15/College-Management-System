import bcrypt from 'bcrypt';

export const generateHash = async (password) => {
    try {
        const saltRounds = Number(process.env.SALT_ROUNDS) || 10;
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (error) {
        console.error("Error while generating password hash:", error);
    }
}

export const comparePassword = (password, hash) => {
    try {
        const response = bcrypt.compareSync(password, hash);
        return response;
    } catch (error) {
        console.error("Error while comparing password with hash : ", error);
        return false;
    }
}

export const generateDeptId = () => {
    const num = Math.floor(Math.random() * 1000);
    const num1 = Math.floor(Math.random() * 100);
    return `DEPT-${num}-${num1}`;
}

export const generateCourseId = () => {
    const num = Math.floor(Math.random() * 1000);
    const num1 = Math.floor(Math.random() * 100);
    return `C-${num}-${num1}`;
}

export const generateUserId = () => {
    const num = Math.floor(Math.random() * 1000);
    const num1 = Math.floor(Math.random() * 100);
    return `User-${num}-${num1}`;
}