import {NgModule,Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
	selector: 'my-app',
	template: `<h1>Hello {{name}}</h1>
		<ul>
			<li *ngFor="let student of students">
				<h2>{{student.studentId}}</h2>
				<p>{{student.name }} {{student.surname| uppercase}}</p>
				<p *ngIf="student.gpa>2.5"> Good student who get grade{{student.gpa | number:'1.2-2'}}</p>
				<p *ngIf="student.gpa<=2.5">Bad student who get grade {{student.gpa | number:'1.2-2'}}</p>
				<p *ngIf="student.gpa>2.2">Bad student who get grade {{student.gpa | number:'1.2-2'}}</p>
			</li>
		</ul>
		
		<ul>
			<li  *ngFor="let student of students">
				
				<p *ngIf="student.gpa>2.2">{{student.name }} {{student.surname| uppercase}}</p>
				
				<p >gpa{{student.gpa | number:'4.2-2'}}</p>
			</li>
		</ul>
		
		<p>The average gpa is {{averageGpa()}}</p>
		<p>current time {{ today | date:'shortTime' }}  </p> 
		`
})
export class AppComponent{
	name='SE331';
	students=[{
		"id":1,
		"studentId":"582115507",
		"surname":"Tu",
		"gpa":4.00
	},{
		"id":2,
		"studentId":"582115508",
		"surname":"Pu",
		"gpa":2.12
	}];
	averageGpa(){
		let sum:number = 0;
		for(let student of this.students){
			sum += student.gpa;
	}
		return sum/this.students.length;
	}
	today = Date.now();

}

@NgModule({
	declaration: [ AppComponent],
	imports: [BrowserModule],
	bootstrap:[AppComponent]
 })
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);