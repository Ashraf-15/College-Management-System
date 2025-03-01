export const course_validation = {
    name: {
        isString: {
            errorMessage : "Name must be a string"
        },
        notEmpty: {
            errorMessage : "Name must be required"
        }
    },
    details: {
        isString: {
            errorMessage : " details must be a string"
        }
    },
    credits: {
        isNumeric: {
            errorMessage : "Credits must be a Number"
        },
        notEmpty: {
            errorMessage : " Credits must ne required"
        }
    },
    syllabus: {
        isString: {
            errorMessage : "syllabus must be a string"
        }
    }
}


export const users_validation = {
    user_id: {
        isString: {
            errorMessage : "user_id must be a string"
        },
    },
    name: {
        isString: {
            errorMessage : "Name must be a string"
        },
        notEmpty: {
            errorMessage : "Name must be reuired"
        }
    },
    email: {
        isEmail: {
            errorMessage: "Enter valid Email"
        },
        notEmpty: {
            errorMessage: "Email must be required"
        }
    },
    phone_no: {
        isNumeric: {
            errorMessage: "phone_no must be a number"
        },
        notEmpty: {
            errorMessage: "Naphone_no reuired"
        }
    },
    password: {
        isString: {
            errorMessage: "Name must be a string"
        },
        notEmpty: {
            errorMessage: "Name must be reuired"
        }
    },
    dob: {
        notEmpty: {
            errorMessage : " Date required"
        }
    },
    dept: {
        notEmpty: {
            errorMessage : "department id required"
        }
    },
    role: {
        notEmpty: {
            errorMessage : "role is required"
        }
    }
}

export const roles_validation = {
    name: {
        isString: {
            errorMessage : "Name must be a string"
        },
        notEmpty: {
            errorMessage : "name is required"
        }
    }
}

export const department_validation = {
    name: {
        isString: {
            errorMessage : "Name must be a string"
        },
        notEmpty: {
            errorMessage : "Name is required"
        }
    }
}