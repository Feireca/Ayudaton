import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Random } from 'meteor/random';

export const Usuarios = new Mongo.Collection('Usuario');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('tasks', function tasksPublication() {
        return Usuarios.find();
    });
}


Meteor.methods({
    'tasks.insert'(user, nombre, ayudas[], puntos) {
        check(nombre, String);

        Usuarios.insert({
            username : nombre,
            user,
            ayudas,
            puntos,
        });
    ),
});