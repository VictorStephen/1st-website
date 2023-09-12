now = new Date();
localtime = now, toString();
document.write("<b>Local Time:</b>" + localtime + "<BR>");
hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
document.write("<h1>");
document.write(hours + ":" + mins +":" + secs);
document.write("</h1>");
//In above statement <BR> is HTML tag so  it is quoted