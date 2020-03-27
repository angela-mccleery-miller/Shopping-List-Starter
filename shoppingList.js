<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Grocery List</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <style>
      #myDiv {
          border: 2px solid black;
          margin-bottom: 10px
        
      }

      
      body {
          font-family: Montserrat;
          margin: 0;
      }

      .header {
          padding: 30px;
          text-align: center;
          background: #1abc9c;
          color: white;
          font-size: 30px;

          .myH2 {
          color: red;
          }

      }

      .list-contents {
          text-align: center;
          color: black;
          font-size: 20px;
      }

      .form {
          display: block;
          list-style-type: running;
          margin-top: 20em;
          margin-bottom; 30em;
          font-size: 25px;
          padding: center;

      }


      ul {
          display: block;
          list-style-type: disc;
          margin-top: 30em;
          margin-bottom; 1 em;
          margin-left: 0;
          margin-right: 0;
          padding-left: 40px
        }
    
      .content {padding: 20px;}

  </style>

  <body>
    <div class="header">
     
      <h1 id="myH1">GROCERY LIST</h1>
      <h2 id="myH2">STOP Hoarding.</h2>

      <form id="shop-add">
          <input type="text" id="add-item" placeholder="New Item" required value="Name of Item Here">
          <button onclick="myFunction()">Add to List</button>
          <!-- <input type="submit" value="Add Item"> -->
      </form>
    </div>

    <div class="list-contents">
        <h3>Shopping List Contents</h3>
    
    </div>
      
    <script>
        function myFunction() {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(" ");
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
}


    </script>
  </body>
</html>