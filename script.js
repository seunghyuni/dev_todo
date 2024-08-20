const addBtn = document.getElementById("addBtn");  // Add 버튼
const deleteBtn = document.getElementById("deleteBtn"); // Delete 버튼
const inputTodo = document.getElementById("inputTodo"); // inputTodo
let count=0;

// 참고로 태그영역은 의미가 없어서 삭제하였음

addBtn.addEventListener("click",function(e){   // Add 버튼 눌렀을때 .
    if ( inputTodo.value=="" ) {
        alert("Todo를 써주세요 ~ ");
        inputTodo.focus();
        return false;
    }else{
        const li = document.createElement("li");
        li.classList.add("liContainer");  // li 생성

        const checkBox = document.createElement("input");
        checkBox.classList.add("check1");
        checkBox.setAttribute("type","checkbox"); // 체크박스 생성

        const span = document.createElement("span");
        span.classList.add("liSpan");  // span 생성

        const button = document.createElement("button");
        button.classList.add("liButton"); // button 생성
        button.innerText="Delete";

        span.innerText = inputTodo.value;   
        inputTodo.value="";
        inputTodo.focus();

        li.append(checkBox,span,button);
        document.querySelector(".todo-list").append(li);

        count++;
        updateCount();

        button.addEventListener("click",function(){    // Delete 눌렀을때 삭제
            this.parentElement.remove();
            if ( !checkBox.checked)
                count --;
            updateCount();    
        });


        checkBox.addEventListener("click",function(){   // check 시 취소선
            if ( checkBox.checked ){
                span.style.textDecoration="line-through";
                span.style.color="gray";
                count--;
            }else{
                span.style.textDecoration= "none";
                span.style.color="black";
                count++;
            } 
            updateCount();
        });
        }   
        updateCount();
    });


  //  전체 삭제
const allDelete = document.getElementById("allDelete");
const todoList = document.getElementById("todo-listId");
allDelete.addEventListener("click",function(){

    if(confirm("정말 삭제하시겠습니까?")==true){   //취소메시지가 true(ok)일때
        if(todoList.innerHTML==''){              //목록칸이 비어있다면
            alert("삭제할 목록이 없습니다");       //삭제할 목록이 없다는 경고창뜨기
        }else{                                   //삭제할 목록이 있다면
            todoList.innerHTML='';               //전체 삭제
            countSpanInput.innerText= "";        // 남은할일 : "" ;
            count = 0;
        }
    }else{                  //취소메시지가 false(no)일때
        return false;                   //삭제 취소
    }
});

  // 남은할일 표시해주는 function 
function updateCount(){
    const countSpanInput = document.getElementById("countSpanInput")
    countSpanInput.innerText = count+" 개";
    if ( count == 0 ) {
        countSpanInput.innerText="";
    }
}

//전체목록 / 체크된목록 / 체크안된목록 보이는 버튼 .
const All = document.getElementById("All");
const Active = document.getElementById("Active");
const Complete = document.getElementById("Complete");
const todoListId=document.getElementById("todo-listId");

All.addEventListener("click", function() {
    showAll();
});
  
Active.addEventListener("click", function() {
    showActive();
});
  
Complete.addEventListener("click", function() {
    showComplete();
});
  
  function showAll() {
    for (var i = 0; i < todoListId.children.length; i++) {
        todoListId.children[i].style.display = "flex";
    }
  }
  
  function showActive() {
    for (var i = 0; i < todoListId.children.length; i++) {
      if (todoListId.children[i].querySelector("input[type=checkbox]").checked === true) {
        todoListId.children[i].style.display = "none";
      } else {
        todoListId.children[i].style.display = "flex";
      }
    }
  }
  function showComplete() {
    for (var i = 0; i < todoListId.children.length; i++) {
      if (todoListId.children[i].querySelector("input[type=checkbox]").checked === false) {
        todoListId.children[i].style.display = "none";
      } else {
        todoListId.children[i].style.display = "flex";
      }
    }
  }
