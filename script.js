
 function zodiac(){
var month= document.getElementById("month").value;
var day= document.getElementById("bdate").value;
var result="unknown please select a valid date.";

 if (month==1 && day >=20 || month==2 && day <=18 ){
   result = ("Aquarius");
   document.getElementById("meaning").innerHTML= "Aquarians have a rebellious nature, and are eccentric, spontaneous and original.They are forward thinking and innovative.Aquariance are scientifically minded and llogical, and confident in manner. They can appear to be  emotionally detached, yet theytruly value socialcontat, and the spirit of humanity";
 }
 if (month==2 && day >=19 || month == 3&& day <=20){
   result = ("Pisces");
   document.getElementById("meaning").innerHTML= "Pisces is a watery sign, concerned with subtle emotions, and secrets mystical depths. They are friendly and likable, and yet can be very moody and introspective as well. Piceans are not entirely at home in this world. Pisceans are dreamy and full of imagination, emotionally semsitive, and easily influenced by their environment.";
  }
 if (month==3 && day >=21 || month == 4&& day <=19){
    result = ("Aries");
    document.getElementById("meaning").innerHTML= "Aries are energetic, forceful and outgoing. Like the energy of the first rush of springtime, they move into the world in a headstrong, pioneering way, and prefer starting to finishing. They tend to rush into things, and may also be impatient. They have great vatality and a tremendous need to be physically active.";
  }
  if (month==4 && day >=20 || month == 5&& day <=20){
    result = ("Taurus");
    document.getElementById("meaning").innerHTML= "Taurus people revel in the pleasure of life. They carve the security and comfort o relaxing in the warmth of their home environment. They value the senses and the enjoyment of material things. Theyare willfull and sometimes can be stubborn. With a large capacity for kindness, they are steadfastly devoted and loyal.";
  }
  if (month==5 && day >=21 || month == 6&& day <=20){
    result = ("Gemini");
    document.getElementById("meaning").innerHTML= "Gemini is the sign associated with conmmunication, logical thought processes (based on duality) and the concious mind. Gemini people tend to be airy and intellectual, glib of tounge and curious about life and other people. They can experience two sides of things at the same time, and may tend to be flighty.";
  }
  if (month==6 && day >=21 || month == 7&& day <=22){
    result = ("Cancer");
    document.getElementById("meaning").innerHTML= "Cancerians are nurtuting and protective of others. Their ruling planet is the Moon, and they tend to be moody, with constantly changing emotions. They are also likely to be security-conscious and highly value their home life. They msy appear passive, and tend to rely on their feelings to make decisions. They are subtle, rather than direct.";
  }
  if (month==7 && day >=23 || month == 8&& day <=22){
    result = ("Leo");
    document.getElementById("meaning").innerHTML= "Leo are likely to express themselves in dramatic, creative and assertive ways. Leos have great energy, courage and honesty. They are likely to be self-confident and maybe even a bit self-indulgent as they expect to be the center of attention, and oten are. They also possess integrity, determination, and are natural leaders.";
  }
  if (month==8 && day >=23 || month == 9&& day <=22){
    result = ("Virgo");
    document.getElementById("meaning").innerHTML= "Virgo  people tend to be very concious in details. They are drawn to being of service to others and are concerned with health and well-being. They are likely to be neat and orderly, at least in some area of their life, although the may exhibit the opposite tendency in cases where they have not yet found their guiding principle of organization.";
  }
  if (month==9 && day >=23 || month == 10&& day <=22){
    result=("Libra");
    document.getElementById("meaning").innerHTML= "Libra is the sign of harmony and relationship and strives for balance between polarities. Librans are known their good taste, elegance and charm. Their natural mode of living is in partnership with others. They are concerned with issues of social justice, and are natural diplomats. They may also struggle inmaking firm decision.";
  }
  if (month==10 && day >=23 || month == 11&& day <=21){
    result = ("Scorpio");
    document.getElementById("meaning").innerHTML= "Scorpios are intense and their emotions run deep. This sign isassociated with sexual activity and with the transformative cycles of death and rebirth. Scorpios have great personal magnetism and great power of persuasion or even the ability to coere others. Their will is strong, and their depth of perception is powerful.";
  }
  if (month==11&& day >=22 || month == 12&& day <=21){
    result = ("Sagittarius");
    document.getElementById("meaning").innerHTML= "Sagitarius is an optimistic sign associated with expansion, idealism, religion amd philosophy. They are direct and forthright, good natured and affirmative in their outlook. They tend to speak with blunt tongue, which can get them into trouble at times. Sagittarians display honesty, humor, and strong moral nature.";
  }
  if (month==12&& day >=22 || month == 1&& day <=19){
    result = ("Capricorn");
    document.getElementById("meaning").innerHTML= "Capricorn people are ambitious, practical, and are likely to have an excellent sense of social responsibility. They also tend to be concious of social mlores, perhaps to the point of over-concern, and can suffer from feeling insecure. They are driven, yet cautious, which allows them to advance slowly and steadily to the top."; 
  }else if (month>12||day>31){
      alert("Kindly Enter an Accurate date!");
  }

document.getElementById("output").innerHTML=result;
}
