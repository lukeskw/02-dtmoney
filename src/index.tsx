import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs'
import {App} from './App';

createServer({

  models: {
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'Freelance de React',
          type: 'deposit',
          category: 'dev',
          amount: 5000,
          createdAt: new Date(),
        },
        {
          id:2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 1000,
          createdAt: new Date(),
        },
      ]
    })
  },

  routes(){
    this.namespace='api';

    this.get('/transactions',()=>{
      return this.schema.all('transaction')
      // return [
      //   {
      //     id: 1,
      //     title: 'transaction 1',
      //     amount: 500,
      //     type: 'deposit',
      //     category: 'art',
      //     createdAt: new Date()
      //   }
      // ]
    })
    this.post('/transactions',(schema, request)=>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);