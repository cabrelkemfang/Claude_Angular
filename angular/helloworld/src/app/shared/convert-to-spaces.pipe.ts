import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {
   transform(value, character): string {
       return value.replace(character, ' ');
   }
}
