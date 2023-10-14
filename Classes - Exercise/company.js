class Company {
    #departments
    constructor() {
        this.#departments = [];
    }

    addEmployee(name, salary, position, department) {
        let employee = {
            name: name,
            salary: Number(salary),
            position: position
        }

        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error('Invalid input!')
        }
        

        if (!this.#departments[department]) {
            this.#departments[department] = [];
        }
        this.#departments[department].push(employee);
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let bestDepartment = '';
        let maxSalary = 0;

        Object.entries(this.#departments).forEach(([key,value]) => {
            let salary = 0;
            value.forEach(e => {
                salary += e.salary
            })
            salary = salary / value.length;
            if (salary > maxSalary) {
                maxSalary = salary;
                bestDepartment = key;
            }
        })

        if (bestDepartment !== '' ) {
            let res = `Best Department is: ${bestDepartment}\nAverage salary: ${maxSalary.toFixed(2)}\n`
            Object.values(this.#departments[bestDepartment]).sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name)).forEach(em => {
                let e = `${em.name} ${em.salary} ${em.position}\n`;
                res += e;
            })
            return res.trim();
        }
    }
}
