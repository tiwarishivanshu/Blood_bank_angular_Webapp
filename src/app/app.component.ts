import { Component,NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop'
import {MatSelectModule} from '@angular/material/select';
import {FormBuilder,FormGroup,Validator} from '@angular/forms';
interface BloodRequired
{
  value:string;
  viewValue:string;
}
interface NumberOfBottels
{
  value:Number;
  viewValue:Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blood-bank';
  group1=['A+', '3'];
  condition1=true;
  group2=['B+','8'];
  condition2=true;
  group3=['AB+','5'];
  condition3=true;
  group4=['A-','9'];
  condition4=true;
  group5=['B-','6'];
  condition5=true;
  group6=['AB-','3'];
  condition6=true;
  yesNo='hidden';
  yesNo1='hidden';
  selectedBr:any;
  selectedNo:any;
  selcNo:any;
  counter=0;
  val:any;
  content:any;
  bucket=[''];
// belo is the drag and drop one dont mess
  BR:BloodRequired[]=[
    {value:'A+', viewValue:'A+'},
    {value:'B+',viewValue:'B+'},
    {value:'AB+',viewValue:'AB+'},
    {value:'A-',viewValue:'A-'},
    {value:'B-',viewValue:'B-'},
    {value:'AB-',viewValue:'AB-'}
  ];
  NB:NumberOfBottels[]=[
    {value:1,viewValue:1},
    {value:2,viewValue:2},
    {value:3,viewValue:3},
    {value:4,viewValue:4},
    {value:5,viewValue:5},
    {value:6,viewValue:6},
    {value:7,viewValue:7},
    {value:8,viewValue:8},
    {value:9,viewValue:9},
    {value:10,viewValue:10}
  ];
  
  dropItem(event:CdkDragDrop<string[]>)
    {
        if(event.previousContainer==event.container)
        {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex,event.currentIndex);
        }
    }
    selc:any;
    
    
    Num(num:Number)
    {
      if(this.counter>1)
        {
          this.yesNo='visible';
          this.val='alert alert-warning';
          this.content='Kindly checkout the items in the bucket';
          this.condition1=true;
          this.condition2=true;
          this.condition3=true;
          this.condition4=true;
          this.condition5=true;
          this.condition6=true;
        }
      else {
          
      if(this.selc==1 && num>=1 && num<=3)
      {
        
        this.group1[1]=String(num);
        this.condition1=false;
        this.condition2=true;
        this.condition3=true;
        this.condition4=true;
        this.condition5=true;
        this.condition6=true;
        this.yesNo='hidden';
        
      }
      else if(this.selc==2 && num>=1 && num<=8)
      {
        
        this.group2[1]=String(num);
        this.condition1=true;
        this.condition2=false;
        this.condition3=true;
        this.condition4=true;
        this.condition5=true;
        this.condition6=true;
        this.yesNo='hidden';
        
      }
      else if(this.selc==3 && num>=1 && num<=5)
      {
        
        this.group3[1]=String(num);
        this.condition1=true;
        this.condition2=true;
        this.condition3=false;
        this.condition4=true;
        this.condition5=true;
        this.condition6=true;
        this.yesNo='hidden';
       
        
      }
      else if(this.selc==4 && num>=1 && num<=9)
      {
        
        this.group4[1]=String(num);
        this.condition1=true;
        this.condition2=true;
        this.condition3=true;
        this.condition4=false;
        this.condition5=true;
        this.condition6=true;
        this.yesNo='hidden';
        
        
      }
      else if(this.selc==5 && num>=1 && num<=6)
      {
        
        this.group5[1]=String(num);
        this.condition1=true;
        this.condition2=true;
        this.condition3=true;
        this.condition4=true;
        this.condition5=false;
        this.condition6=true;
        this.yesNo='hidden';
        
        
      }
      else if(this.selc==6 && num>=1 && num<=3)
      {
        
        this.group6[1]=String(num);
        this.condition1=true;
        this.condition2=true;
        this.condition3=true;
        this.condition4=true;
        this.condition5=true;
        this.condition6=false;
        this.yesNo='hidden';
       
        
      }
      else {
        this.condition1=true;
        this.condition2=true;
        this.condition3=true;
        this.condition4=true;
        this.condition5=true;
        this.condition6=true;
        this.yesNo='visible';
        this.val='alert alert-warning';
        this.content='Kindly selecte the quantity as per the quota provided';

      }
    }
      
      
      
    }
    enable(x:string)
    {
      
      if(x=='A+')
      {
        this.selc=1;
        this.counter++;
      }
      if(x=='B+')
      {
        this.selc=2;
        this.counter++;
      }
      if(x=='AB+')
      {
        this.selc=3;
        this.counter++;
      }
      if(x=='A-')
      {
        this.selc=4;
        this.counter++;
      }
      if(x=='B-')
      {
        this.selc=5;
        this.counter++;
      }
      if(x=='AB-')
      {
        this.selc=6;
        this.counter++;
      }
    }
    reset()
    {
      location.reload();
    }
    checkout()
    {
      if(this.counter==1)
      {
        location.reload();
        this.val='alert alert-success';
          this.content='Successfull';
          this.yesNo='visible';
      }
      else
      {
          this.val='alert alert-danger';
          this.content='Kindly add something to the bucket';
          this.yesNo='visible'
      }
    }
  
}