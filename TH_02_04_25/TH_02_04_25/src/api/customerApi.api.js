export async function fetchCustomer(id) {
    try {
        const response = await fetch(`https://67c81bf20acf98d07084e0cf.mockapi.io/customers/${id}`);
        
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}

export async function fetchStatistics() {
    const response = await fetch("https://67c81bf20acf98d07084e0cf.mockapi.io/Statistics");
    return response.json();
}

export async function fetchCustomers() {
    const response = await fetch("https://67c81bf20acf98d07084e0cf.mockapi.io/customers");
    return response.json();
}

export async function updateCustomer(id, updatedData) {
    try {
        const response = await fetch(`https://67c81bf20acf98d07084e0cf.mockapi.io/customers/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Update error:", error);
        return null;
    }
}

export async function fetchLastCustomer() {
    try {
        const response = await fetch(`https://67c81bf20acf98d07084e0cf.mockapi.io/customers?sortBy=id&order=desc&limit=1`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Trả về customer cuối cùng nếu có
        return data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Fetch last customer error:", error);
        return null;
    }
}

export async function createCustomer(newCustomer){
    try{
        const response = await fetch('https://67c81bf20acf98d07084e0cf.mockapi.io/customers',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCustomer)
            }
        );

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const newCus = await response.json();
        return newCus;
    }
    catch (error){
        console.error("Create customer error:", error);
        return null;
    }
}
