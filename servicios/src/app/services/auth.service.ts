import { Injectable } from '@angular/core';
import { producerMarkClean } from '@angular/core/primitives/signals';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private aFAuth: AngularFireAuth) { }

  // Método para iniciar sesión con Google
  async signInWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.aFAuth.signInWithPopup(provider);
      return credential;
    } catch (error) {
      console.error('Error al iniciar sesión con Google: ', error);
      throw error;
    }
  }

  // Método para iniciar sesión con Twitter
  async loginWithTwitter() {
    try {
      const provider = new firebase.auth.TwitterAuthProvider();
      const userCredential = await this.aFAuth.signInWithPopup(provider);
      console.log('Usuario autenticado con Twitter:', userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error('Error en el login con Twitter:', error);
      throw error;
    }
  }

  getCurrentUser() {
    return new Promise((resolve) => {
      this.aFAuth.authState.subscribe((user) => {
        resolve(user); // Devuelve el usuario autenticado o null
      });
    });
  }

  // Método para cerrar sesión
  async signOut() {
    return this.aFAuth.signOut();
  }
}
