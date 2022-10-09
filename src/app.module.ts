import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),

    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),

    PokemonModule
  ],
})
export class AppModule {}




/**
 * if the error "Cannot find module 'path'"
 * appears, then install the package '@types/node'
 * in the dependencies, not in devDependencies.
 */

/**
 * Remember to update the tsc and Typewcript on
 * your machine before to use 'MongooseModule'
 */
