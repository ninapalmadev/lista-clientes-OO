class Cliente {

    constructor() {
        this.id = 1;
        this.arrayClientes = [];
    }
    salvar(){
        let cliente = this.lerDados();
        let adiciona = this.adicionar(cliente)
        this.listaTabela()
    }
    adicionar(cliente){
        this.arrayClientes.push(cliente);
        this.id++;
    }
    
    listaTabela(){
        let tbody = document.getElementById("tbody");
        tbody.innerText = '';
        
        for(let i = 0; i < this.arrayClientes.length; i++){
            let tr = tbody.insertRow();
            
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_cpf = tr.insertCell();

            td_id.innerText = this.arrayClientes[i].id;
            td_nome.innerText = this.arrayClientes[i].nomeCliente;
            td_cpf.innerText = this.arrayClientes[i].cpfCliente;
        }
    }
    
    lerDados() {
        let clientes = {}
        clientes.id = this.id;
        clientes.nomeCliente = document.getElementById("nome").value
        clientes.cpfCliente = document.getElementById("cpf").value

        return clientes;
    }
}

let cliente = new Cliente()