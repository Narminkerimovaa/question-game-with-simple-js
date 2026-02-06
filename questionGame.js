let start = confirm("IT Quiz oyununa başlamağa hazırsan?");
alert("4 səhv cavabla uduzursan!!!");

const questions = [
  "1. 'Süni İntellektin atası' sayılan riyaziyyatçı kimdir?",
  "2. Dünyada yaradılan ilk veb-sayt hansı mərkəzə (təşkilata) məxsus idi?",
  "3. Linux əməliyyat sisteminin yaradıcısı kimdir?",
  "4. Proqramlaşdırmada xəta mənasını verən 'Bug' sözünün hərfi mənası nədir?",
  "5. 'Google' adı hansı riyazi termindən götürülüb?",
  "6. Hansı proqramlaşdırma dili adını bir komediya qrupundan götürüb?",
  "7. İlk elektron kompüterin adı nə idi? (4 hərf)",
  "8. E-poçt ünvanlarında '@' işarəsini ilk dəfə kim istifadə edib?",
  "9. 'Bit' sözünün açılışı nədir? (İngiliscə)",
  "10. Apple-ın ilk loqosunda hansı alimin təsviri var idi?",
];

const answers = [
  "alan turing",
  "cern",
  "linus torvalds",
  "böcək",
  "googol",
  "python",
  "eniac",
  "ray tomlinson",
  "binary digit",
  "nyuton",
];

let score = 0;
let wrong = 0;

if (start) {
  alert("Əla! Suallarımıza başlayırıq!");
  for (let i = 0; i < questions.length; i++) {
    if (wrong === 4) {
      alert("Təəssüf! 4 səhv etdiyiniz üçün oyun dayandırıldı.");
      break;
    }

    let result = prompt(questions[i]);

    if (result.toLowerCase().trim() === answers[i]) {
      score++;
      alert("Doğrudur!");
    } else {
      wrong++;
      alert("Səhvdir! Qalan haqqınız: " + (4 - wrong));
    }
  }
  console.log("score", score);
  console.log("wrong", wrong);
} else {
  alert("Təəssüf, növbəti dəfə gözləyərik.");
}
