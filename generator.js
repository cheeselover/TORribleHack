if (!window.console) window.console = {
  log: function() {}
};
(function() {
  $(document).ready(function() {
    init()
  })
})();
var sample_in = "0|2,3|5||4|||",
    incoming_phrase = "",
    current_share_key = [];

function change(a) {
  var b = "";
  a = eval(a).split(".");
  for (var d = 0; d < a.length; d++) {
    b = a[d].trim().charAt(0);
    a[d] = a[d].replace(b, b.toUpperCase())
  }
  return b = a.join(" . ")
}

function loadPhrase(a) {
  var b = a.split("|");
  the_resp_text = the_rand_phrase = the_phrases[b[0]];
  current_share_key[0] = the_rand_phrase;
  the_resp_text.split("**NOUN**");
  the_resp_text.split("**VERB**");
  the_resp_text.split("**ADJ**");
  the_resp_text.split("**ADVERB**");
  the_resp_text.split("**BSE**");
  a = b[1].split(",");
  var d = b[2].split(","),
      f = b[3].split(","),
      g = b[4].split(","),
      e = b[5].split(",");
  b = b[6].split(",");
  current_share_key[1] = a;
  current_share_key[2] = d;
  current_share_key[3] = f;
  current_share_key[4] = g;
  current_share_key[5] =
  e;
  current_share_key[6] = b;
  for (var c = 0; c < a.length; c++) the_resp_text = the_resp_text.replace("**NOUN**", "<span class='noun'>" + nouns[a[c]] + "</span>");
  for (c = 0; c < d.length; c++) the_resp_text = the_resp_text.replace("**VERB**", "<span class='verb'>" + verbs[d[c]] + "</span>");
  for (c = 0; c < f.length; c++) the_resp_text = the_resp_text.replace("**ADJ**", "<span class='adj'>" + adjectives[f[c]] + "</span>");
  for (c = 0; c < g.length; c++) the_resp_text = the_resp_text.replace("**ADVERB**", "<span class='adv'>" + adverbs[g[c]] + "</span>");
  for (c =
  0; c < e.length; c++) the_resp_text = the_resp_text.replace("**BSE**", "<span class='bse'>" + bse[e[c]] + "</span>");
  for (c = 0; c < b.length; c++) the_resp_text = the_resp_text.replace("**BSE_START**", "<span class='bse'>" + bse_start[b[c]] + "</span>");
  the_resp_text = the_resp_text.replace(". <span class='", ". <span class='cap ");
  the_resp_text = sentence_caps(the_resp_text);
  $("#response").hide();
  $("#response").html("&ldquo;" + the_resp_text + "&rdquo;");
  $("#response").fadeIn()
}

function serializeChoices() {
  the_choices_string = "";
  var a = [];
  $.each(current_share_key, function(b) {
    b = current_share_key[b].toString();
    a.push(b)
  });
  the_choices_string = a.join("|");
  jQuery.param({
    s: the_choices_string
  });
  return the_choices_string
}
function capitalize(a) {
  strVal = "";
  a = a.split(" ");
  for (var b = a[0].substring(0, 1).toUpperCase() + a[0].substring(1, a[0].length) + " ", d = 1; d < a.length; d++) b += a[d].toLowerCase() + " ";
  return b.trim()
}
var the_phrases = ["Looking forward to 2014, **NOUN** will be key to our ability to **VERB** the **NOUN** **ADVERB**.", "This product will **VERB** **NOUN** and demonstrate **ADJ** performance in **NOUN**.", "We need to move now. Our competitors already **VERB** **ADJ** **NOUN**.", "**VERB** the **NOUN** **ADVERB**. **BSE**.", "**BSE_START**, the marketplace has changed. **VERB** **ADVERB** or **VERB**.", "If we **VERB**, we will unfortunately be lagging in **ADJ** **NOUN**.", "People, in the coming year, we need to **ADVERB** **VERB** our **NOUN**.", "**BSE_START**, it's time to act with **ADJ** **NOUN** and **VERB** our team **NOUN**.", "Our **NOUN** is the most **ADJ** thing at our company. Do your best to **VERB** it.", "All: Please note the new policy -- Starting next calendar year, we will **VERB** on **ADJ** **NOUN**. **BSE**.", "I'm disappointed in the way we **VERB** our **NOUN**. Let's please **VERB** our efforts.", "Our **NOUN** center is focused on new ways to **VERB** the consumer space through **ADJ** deployments of **NOUN**.", "The tax-and-accounting department has issues with the **ADJ** way you **ADVERB** treated this **ADJ** transaction.", "As part of our review of **NOUN**, we have decided to move forward with **ADJ** **NOUN**. **BSE**.", "Your colleagues are increasingly **ADJ**, so it's important that we **VERB** accordingly.", "If the challenges persist, we should immediately **VERB**.", "Next quarter we will launch our new **NOUN**-killer which will **VERB** the **NOUN** **ADVERB**.", "This sector has **ADJ** **NOUN**. **BSE**.", "Our team leader just gave us a **ADJ** pep talk.", "The boss gathered the managers for an emergency meeting and said **ADJ** **NOUN**. **BSE**.", "My co-workers have been **ADJ** **NOUN** since the reorganization."],
    nouns = ["agility", "alignment", "alpha", "bandwidth", "Big Data", "boots on the ground", "brand", "the cloud", "change agent", "community", "content marketing", "corporate social responsibility", "deep dive", "early adopter", "ecosystem", "enterprise", "face time", "footprint", "game-changer", "horizontal management structure", "ideation", "incubator", "industry", "innovation", "IP", "learnings", "low-hanging fruit", "mindshare", "minimum viable product", "narrative", "native advertising", "onboarding", "optics", "paradigms", "passion", "playing field", "ROI", "skillsets", "solutions", "sustainability", "synergy", "thought leaders", "tipping point", "traction", "transformation", "value add", "vector", "visibility", "wheelhouse"],
    bse_start = ["At the end of the day", "Going forward", "Moving forward"],
    bse = ["It is what it is", "Yolo", "Skate to where the puck is going to be"],
    verbs = ["aggregate", "amortize", "benchmark", "circle back", "close the loop", "cross-pollinate", "curate", "dialog", "disrupt", "drill down", "drive", "empower", "future-proof", "gamify", "ideate", "impact", "incentivize", "innovate", "leverage", "monetize", "move the needle", "open the kimono", "piggyback", "pivot", "push the envelope", "quantify", "re-imagine", "reach out", "recontextualize", "roll out", "silo", "streamline", "synthesize", "taper", "tee up", "transform", "unpack", "vertically integrate"],
    adjectives = ["24/7", "agile", "amazing", "artisanal", "authentic", "bleeding-edge", "cloud-based", "cutting-edge", "disruptive", "dynamic", "entrepreneurial", "epic", "epic", "frictionless", "game-changing", "granular", "high level", "iconic", "innovative", "intuitive", "meta", "multiplatform", "organic", "out of the box", "passionate", "pro-active", "proven", "robust", "robust", "social", "strategic", "sustainable", "turnkey", "ultimate", "value-added", "vertical", "viral", "win-win", "world-class"],
    adverbs = ["holistically", "literally", "strategically", "organically", "vertically", "horizontally"],
    the_choices_string = "";

function sentence_caps(a) {
  var b = a.split(". ");
  $.each(b, function(d) {
    if (b[d].charAt(0) == "<") {
      var f = b[d].split(">"),
          g = f[1].charAt(0).toUpperCase() + f[1].substr(1);
      f[1] = g;
      f = f.join(">");
      b[d] = f
    } else {
      f = b[d].charAt(0).toUpperCase() + b[d].substr(1);
      b[d] = f
    }
  });
  return b.join(". ")
}
var test_caps = "<span class='verb'>tee up</span> the <span class='noun'>tipping point</span> <span class='adv'>literally</span>. <span class='cap bse'>yolo</span>.",
    test_caps2 = "tee up the <span class='noun'>tipping point</span> <span class='adv'>literally</span>. yolo.",
    test_multiples = "**VERB** I'm disappointed in the way we **VERB** this **NOUN** **NOUN** **NOUN**. Let's please **VERB** our efforts.",
    the_rand, the_resp_text;

function rand_noun() {
  var a = Math.floor(Math.random() * nouns.length),
      b = current_share_key[1].indexOf(a);
  if (b != -1) a = Math.floor(Math.random() * nouns.length);
  b = current_share_key[1].indexOf(a);
  if (b != -1) a = Math.floor(Math.random() * nouns.length);
  current_share_key[1].push(a);
  return nouns[a]
}

function rand_verb() {
  var a = Math.floor(Math.random() * verbs.length),
      b = current_share_key[2].indexOf(a);
  if (b != -1) a = Math.floor(Math.random() * verbs.length);
  b = current_share_key[2].indexOf(a);
  if (b != -1) a = Math.floor(Math.random() * verbs.length);
  current_share_key[2].push(a);
  return verbs[a]
}

function rand_adj() {
  var a = Math.floor(Math.random() * adjectives.length),
      b = current_share_key[3].indexOf(a);
  if (b != -1) a = Math.floor(Math.random() * adjectives.length);
  b = current_share_key[3].indexOf(a);
  if (b != -1) a = Math.floor(Math.random() * adjectives.length);
  current_share_key[3].push(a);
  return adjectives[a]
}

function rand_adv() {
  var a = Math.floor(Math.random() * adverbs.length),
      b = current_share_key[4].indexOf(a);
  if (b != -1) a = Math.floor(Math.random() * adverbs.length);
  b = current_share_key[4].indexOf(a);
  if (b != -1) a = Math.floor(Math.random() * adverbs.length);
  current_share_key[4].push(a);
  return adverbs[a]
}

function rand_bse() {
  var a = Math.floor(Math.random() * bse.length),
      b = current_share_key[5].indexOf(a);
  if (b != -1) a = Math.floor(Math.random() * bse.length);
  b = current_share_key[5].indexOf(a);
  if (b != -1) a = Math.floor(Math.random() * bse.length);
  current_share_key[5].push(a);
  return bse[a]
}
function rand_bse_start() {
  var a = Math.floor(Math.random() * bse_start.length);
  current_share_key[6].push(a);
  return bse_start[a]
}

function rand_phrase() {
  current_share_key = [];
  the_rand = Math.floor(Math.random() * the_phrases.length);
  the_rand_phrase = the_phrases[the_rand];
  current_share_key[0] = the_rand;
  randomResp();
  window.countClicks("rand_phrase")
}

function randomResp() {
  current_share_key[1] = [];
  current_share_key[2] = [];
  current_share_key[3] = [];
  current_share_key[4] = [];
  current_share_key[5] = [];
  current_share_key[6] = [];
  the_resp_text = the_rand_phrase;
  for (var a = the_resp_text.split("**NOUN**").length - 1, b = the_resp_text.split("**VERB**").length - 1, d = the_resp_text.split("**ADJ**").length - 1, f = the_resp_text.split("**ADVERB**").length - 1, g = the_resp_text.split("**BSE**").length - 1, e = 0; e < a; e++) the_resp_text = the_resp_text.replace("**NOUN**", "<span class='noun'>" + rand_noun() + "</span>");
  for (e = 0; e < b; e++) the_resp_text = the_resp_text.replace("**VERB**", "<span class='verb'>" + rand_verb() + "</span>");
  for (e = 0; e < d; e++) the_resp_text = the_resp_text.replace("**ADJ**", "<span class='adj'>" + rand_adj() + "</span>");
  for (e = 0; e < f; e++) the_resp_text = the_resp_text.replace("**ADVERB**", "<span class='adv'>" + rand_adv() + "</span>");
  for (e = 0; e < g; e++) the_resp_text = the_resp_text.replace("**BSE**", "<span class='bse'>" + rand_bse() + "</span>");
  the_resp_text = the_resp_text.replace("**BSE_START**", "<span class='bse'>" + rand_bse_start() + "</span>");
  the_resp_text = the_resp_text.replace(". <span class='", ". <span class='cap ");
  the_resp_text = sentence_caps(the_resp_text);
  $("#response").hide();
  $("#response").html("&ldquo;" + the_resp_text + "&rdquo;");
  a = '"' + the_resp_text.replace(/<\/?[^>]+(>|$)/g, "") + '"';
  $("#socialtools").SocialClimber("update", {
    text: a,
    url: function() {
      return window.location.href
    }
  });
  serializeChoices();
  $.bbq.pushState({
    p: the_choices_string
  });
  $("#response").fadeIn();
  window.countClicks("rand_buzzwords")
}

function init() {
  $("#socialtools").SocialClimber({
    share: ["twitter", "facebook", "linkedin", "googleplus", "permalink"],
    type: "button",
    style: "grey",
    url: function() {
      return window.location.href
    },
    text: "Business Buzzwords Generator",
    optional: {
      twitter: {
        counturl: "http://projects.wsj.com/buzzwords2014/",
        via: "wsj"
      },
      facebook: {
        name: "WSJ Business Buzzwords Generator",
        description: "Use this handy tool to generate and share a custom-built meaningless business phrase using 2013's most over-used business buzzwords as submitted by WSJ readers.",
        picture: "http://s.wsj.net/public/resources/images/BN-AY423_buzzwo_E_20140101172853.jpg"
      }
    }
  }, {
    bitly: {
      login: "wsjblogs",
      apikey: "R_4dd2ea29f00a2b806151d12d7807286b",
      domain: "on.wsj.com"
    },
    facebook: {
      appId: function() {
        switch (window.location.hostname) {
        case "graphicsdev.dowjones.net":
          return 363579230418270;
        case "graphicsweb.wsj.com":
          return 433796883407517;
        case "projects.wsj.com":
          return 243124055852668
        }
      }
    }
  });
  $("#random_phrase").on("click", rand_phrase);
  $("#random_buzzwords").on("click", randomResp);
  incoming_phrase =
  $.bbq.getState("p");
  incoming_phrase != undefined ? loadPhrase(incoming_phrase) : rand_phrase()
};
