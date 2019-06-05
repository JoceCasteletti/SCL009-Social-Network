import { validateNewUser } from '../src/assets/js/validate.js';


describe('validateNewUser',()=>{
    it('deberia retornar false si el usuario no ingresa nombre',()=>{
      expect(validateNewUser ('','Perez','juan.perez@gmail.com')).toBe(false);        
    })
  
    it('deberia retornar true si el usuario ingresa todos los campos',()=>{
      expect(validateNewUser ('Juan','Perez','juan.perez@gmail.com')).toBe(true);
    })
    
    it('deberia retornar false si el usuario no completa todos los campos',()=>{
      expect(validateNewUser ('','','')).toBe(false);
    })
    
  });