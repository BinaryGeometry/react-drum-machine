const ValidationService = {


    PI: 3.14159,
    appName: 'My TypeScript App',
    maxAttempts: 3,
    isAuthenticated: true,
    validation: {"display":"one", "volume":10, "padBank":"pad"},
    
    firstValidationMethod: function(value) {
        //inspect the value
        return this.validation
    },

    secondValidationMethod: function(key, value) {
        this.validation[key] = value;
        //inspect the value
    }

};

export default ValidationService;