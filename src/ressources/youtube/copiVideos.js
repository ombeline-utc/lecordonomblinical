import { $ } from "vue/macros";

const copiVideos = [
     {
        name: 'Le scarabée et le lièvre',
        slug: 'scarabée-lièvre',
        n: 0,
        id: 'H-sNGRE7xTQ',
        vignette: new URL('../images/coPi/vignette-scarabéeLièvre.png', import.meta.url).href,
        description: `Il grésillait, creusant la nuit
Il perçait ses non-dits
Dévoilant le bruit, alarmant les paisibles
Car sous l’ombre viennent des chants
Et des petits ventres naissent les légendes
Mon lièvre a une aigreur au goût de cendre qui se demande si un massacre on peut en comprendre mille
Si par un coup de fusil on a vraiment dépeuplé cent familles
Un choc videra la place
Un battement d’ailes pour tant d’oiseaux
Ce matin le malheur s’est levé tôt
Et rien, jamais, ne les remplaçera 
Alors le scarabée porte ses plaintes à la nuit
Elle s’agenouille et lui dit : « vas-y crie mon ami
Je ne saurai pas te protéger mais je verrai tout et le porterai jusqu’au prochain siècle.
J’acculerai le sang d’avoir été vidé de ton éternité
Vous serez la meute que j’éclairerai »
Mon lièvre fend la vitesse, il la répète en une rage à une promesse
Celle de lutter pour que ta voix hurle encore
Que tu fus vivant
Et que ta vie nous donnait un sens

|| musique par Dhafer Youssef - Cantus Lamentus`,
    },
    {
        name: 'La fugitive',
        slug: 'la-fugitive',
        n: -1,
        id: 'pKOWmAf9HgM',
        vignette: new URL('../images/coPi/vignette-laFugitive.png', import.meta.url).href,
        description: `Parfois, fuir c’est se choisir.
Prendre son indépendance, tant pour une femme qu’une folle, c’est décider d’où nous sommes et où nous ne serons plus.
Quand les figures de l’urbain se font creuses nous disons : chantons à l’unisson du déraisonnable, partons.

|| musique : Stefan Levin - La nuit

    - -


Nous sommes trois femmes s’ayant rencontrées par le hasard d’une évidence. Nous avons atterries toutes trois dans une maison avec une âme envoûtante, qui nous a dit « voilà un refuge » où se retirer des eaux tempétueuses du cours de nos vies respectives. Alors nous avons créé, chaque jour, chacune, ce qui nous permettait de renouer avec notre parole, nos rêves, nos conséquences. Et de coups d’oeil sur le travail de l’autre à des moments de symbiose à parler de nos errances, de nos voyages, de notre vécu de femme, d’émancipation, des névralgies d’un monde douloureux pour beaucoup, injuste et vidé de ce qui nous fait vivre. Voilà que rapidement, de simples co-habitantes nous sommes devenues soeurs, sensibles à nos réalités partagées et individuelles et puissantes de se réunir et se reconnaître. Alors sur une fulgurance de vouloir raconter quelque chose qui nous parlait à chacune, un après-midi tout s’est constellé très vite, à la tombée du jour nous animions notre jardin d’un décor où promener les songes, la nuit nous filmions, dansions, riions, chantions et dans la foulée nous avons fait le montage : nous étions transportées.`,
    },
    {
        name: 'Onda su onda cazzo',
        slug: 'onda-su-onda',
        n: 1,
        id: 'Xpp-jK-onp4',
        vignette: new URL('../images/coPi/vignette-ondaSuOnda.png', import.meta.url).href,
        description: `sans contrefaçon, je ne veux pas de glaçon.

        || musique par Paolo Conte - Onda sur onda`,
    },
    {
        name: 'La dorade qui pêchait le frioul',
        slug: 'la-dorade',
        n: 2,
        id: 'YxCrm9gJyP0',
        vignette: new URL('../images/coPi/vignette-laDorade.png', import.meta.url).href,
        description:  `L'homme dorade fait beaucoup de bulles quand il respire. Ces bulles brillent comme les mouettes quand elles touchent le soleil. Elles ont le goût du Sud et le cœur sur les mains.

Alors quand l'étang devient océan, quand je suis perdue par les récits du ciel, il m'offre une bulle. Il nous sourit, à moi et la vie. Si nous y sommes, c'est pour rire. Alors petite crevette, prends confiance. 

Car un chalutier ivre de légumes et de bébés pigeons nous attend au port. 

Tu me diras qu'une dorade n'aime pas fréquenter les ports, qu'elle peine à s'arrêter sentir la certitude de la terre ferme. Je te crois, l'eau fugitive est douce sous les vents insomniaques du large. 

|| musiques par 
° Vangelis - La petite fille de la mer
° Idir - A Vava Inouva`
    },
      {
        name: 'La dorade qui pêchait le frioul',
        slug: 'la-dorade',
        n: 2,
        id: 'YxCrm9gJyP0',
        vignette: new URL('../images/coPi/vignette-laDorade.png', import.meta.url).href,
        description:  `L'homme dorade fait beaucoup de bulles quand il respire. Ces bulles brillent comme les mouettes quand elles touchent le soleil. Elles ont le goût du Sud et le cœur sur les mains.

Alors quand l'étang devient océan, quand je suis perdue par les récits du ciel, il m'offre une bulle. Il nous sourit, à moi et la vie. Si nous y sommes, c'est pour rire. Alors petite crevette, prends confiance. 

Car un chalutier ivre de légumes et de bébés pigeons nous attend au port. 

Tu me diras qu'une dorade n'aime pas fréquenter les ports, qu'elle peine à s'arrêter sentir la certitude de la terre ferme. Je te crois, l'eau fugitive est douce sous les vents insomniaques du large. 

|| musiques par 
° Vangelis - La petite fille de la mer
° Idir - A Vava Inouva`
    },
    {
        name: 'Ombres et paix',
        slug: 'ombres-paix',
        n: 3,
        id: 'tJXVSPe6f6w',
        vignette: new URL('../images/coPi/vignette-ombresPaix.png', import.meta.url).href,
        description: `je ne suis rien. rien qu'une fatigue de collecter des preuves que je suis. je ne suis rien. je n'ai plus de passé. plus rien depuis lequel inventer.
plus aucun passé.
alors accablée des acclaments du classement, j'entoure et fore la mer aux plaintes Khmer. 
je ne suis pas encore
je suis trop encore
pour honorer mes discours
je ne dois plus créer.
je dois me désentir.
plutôt que me rapatrier en un corps, je dois n'en avoir pas. reculer de mes constellations. oublier mon prénom. 

être la paix sous les ombres des peupliers.

|| musiques par Andrea Lazlo de Simone - album Amour et Guerre`
    },
    {
        name: "L'oxygène du loup noir",
        slug: 'oxygène-loup-noir',
        n: 4,
        id: '_r2JV5vynfI',
        vignette: new URL('../images/coPi/vignette-oxygèneLoupNoir.png', import.meta.url).href,
        description: `Il se fait tard
Le loup range les placards
avare de mes secrets
Laissez-moi seule avec le loup s’il-vous-plait

J’hésite à passer les marches
je lévite sous leurs arches
alcoolisées par les tremblements de l’été
Il ne faudra qu’un coup de collier
pour qu’il puisse me parler

Lire plus haut que l’Iran
plus bas que l’Orient
entre les deux presses d’un même cadran solaire.
Vers une ère où je me jette
comme les arêtes 
des mains des poissonniers

J’irai boire l’eau lasse 
du cran à marée basse
d’un seigneur sans violon
mais avec un grand menton
comme une fourchette
qui pique dans les mangeoires
des plus grosses gargouilles
des plus petits ventres
des plus éclatantes des hirondelles
ô mes belles 

j’ai l’élan gorgé de sel
Un délit qui n’a pas attendu que la nuit
nous murmure une pluie
chaude
sous les lampadaires
frêle 
sous les cœurs austères
aimante
sous les pôles épaulés
par des oiseaux que ni le jour
ni son absence
n’affaiblissent les reflets.

J’aimerais danser une chorale macabre
telle un tronc étanche
alors maman prépare une pissaladière
J’y ajoute cette fois le sel
avant que de saluer un cimetière 
de granit et d’âmes centrifuges
sachant parmi tout aux ondes que je deviens déjà ;
une femme de l’au-delà.

Fossile d’une larme brune,
ma tasse en veut encore.
Cafetier, un billet s’il-vous-plait.
 
Les éreintés saignent le plancher
il leur semble élégant de cavaler 
les boues étanches et épuisées
d’un été qu’on a pas vu venir
qu’on aurait adoré embellir
d’un amour flamboyant. 

A qui bon le dire
je nous veux un navire 
qui vire la dialyse 
qui nous tétanise
donc pourquoi pas un navire
qui me fera partir.

creuse 
creuse 
et tombe
épiée par les meuleuses 
tu t’entends tomber
la ville s’adoucit lors des aubes roses. Mais je n’oublie pas
que je suis le matin et mourante ; le vide est creux creux rapporte tes bottes au temple
non je ne vendrai pas l’Estaque

le vent prend et détend l’enfant. Puis l’évident étend le vent, l’enfant l’entend et le détend. 
L’évident est dans le vent
l’enfance lui demande une délivrance. 
Ils s’entendent sur un coup de tête
maladroit
ils s’effleurent du bout des doigts
mais ne se rattrapent hélas pas. 

Là- haut sur la montagne
se cache un château
où le topaze côtoie l’ébène

les héritiers, irrités, veinent leur capot d’astre
et charment les astres

virulents devant le désastre du là-bas

mer de Socratiens 
elle nait des tsars martiens
sel en gorge-tribu, Tibulle repose leur cavale.
Aimerions-nous les aimants d’idéaux 
si nous ne nous perchions pas si haut ? 

Ajourner les tintes des couches qu’ils portent
Vérinner leurs bals contemporains
Hydrolat d’un écueil sans parlotte

Vomir le soir
Lui qui pourtant amène l’espoir par l’explore.

Coulent coulent les étendards
tapent tapent les nerfs du bois
vrillent vrillent les oriflammes
j’aimerais qu’on éteigne l’infâme

Loup noir , draine ton poil 
serre les cales 
chavire la loi
plus que toi et moi

goudrons l’or bas
plus bas que le soir, plus bas que l’orient
sois ma joie
qui baise les cendres

sentir flasque
l’air nous remarque 
point de groseille
dans ce vase noir

alors je prends le départ 
des marée loirs
d’un autre repos
celui de l’infante

L’infâme n’a qu’à se tenir 
et ne pas dépasser delà
du cellier fort bien scellé
maigre j’étais 
quantique je serai

Mon ami le loup m’a dit 
d’écouter minuit d’étirer la nuit
Être vivant a ses soucis
mais la lune en a aussi
elle qui me donne la vie.

|| musiques par Khaled Mouzanar

    Kyrié Allah
    Zaghloul El Hamam
    Deuil de Nassim`
    },
    {
        name: "L'herbe noire, les cloches et le condamné",
        slug: 'herbe-cloches-condamné',
        n: 5,
        id: '_r2JV5vynfI',
        vignette: new URL('../images/coPi/vignette-condamné.png', import.meta.url).href,
        description: `Le ciel parle des hauteurs si aiguës que même quand les hirondelles se prépareront à le pourchasser il n’y aura que lui qui aura les pieds sur terre. 

Vire la marée à tribord comme on vire un salarié à son sort, comme on l’enivre à la mort. Car la tempête est rageuse. L’orage l’a trop rouspétée. 
Exaspéré, le voilà exalté par la pitié. 

Vous ne me trouverez pas chantant des berceuses, mais poinçonnant les chants des prisonniers. 

Il faut mieux raidir l’ordinaire car les fourchettes ont déjà piqué toutes les rides de mon passé. Effacez ce trop grand tableau. L’école n’y amorce plus que des grands ducs ou des suicidaires. Héritage de l’hérisson qui, mort sous ce pneu, aurait souhaité une trêve du rallye métro boulot dodo. 

Charivari 
d’un 
condamné à mort. 

Les grilles. Épaisses comme une tombe. Le blanc. Opaque comme une tombe. Les néons. Écrivains d’une fin de vie. Et moi, je m’y évanouis. Et tombe. 

|| musiques par Babx

    ° Jean Genet 
    ° Merveille dans la pirogue`
    },
    {
        name: "Un deuil",
        slug: 'un-deuil',
        n: 6,
        id: 'ab2BnQp7Cuo',
        vignette: new URL('../images/coPi/vignette-unDeuil.png', import.meta.url).href,
        description: `Quand je respire, je fais entrer plus de temps en moi.

Et c'est pas grand chose mais je t'emmènerai au bord de la mer, promis. 

|| musique de Clara Ysé - Le monde s'est dédoublé`
    },
    {
        name: "Le ciel la chante",
        slug: 'le-ciel-la-chante',
        n: 7,
        id: 'dU0r83mK0Zg',
        vignette: new URL('../images/coPi/vignette-cielChante.png', import.meta.url).href,
        description: `Et malgré les bousculades, elle continua de chanter. Alors que la foule la piétinait, alors que sa voix tremblait, les vagues l’emportaient. Elle chantait autant que la promène l’audace des rafales, des chamades de l’hiver. L’eau glacée ne cessait de chavirer son épine toute cassée. Brisée en cendres, elle s’envola et ne repris prise que devant le givre, cette immensité cristallisée. Elle chantait à en perdre la terre. Elle s’envolait à en gagner l’éther. 

Quand soudain, apportés par les flots, lui revint un souvenir. D’un lointain désir, d’un long soupir, d’un certain vertige. Celui de son avenir. Tiré d’entre les rides du crapeau-cadenas, celui qu’on ne regarda pas quand le ciel s’est ouvert, laissant à découvert les séismes d’outre-mer. Elle chantait à en perdre tous les reflets du passé, entre-chassé entre nos effrois esclaffés et cette rivière automatique, assoiffée par le givre. Ivre de tempo elle chantera un mot sur deux, le souffle congestionné. Mais, qui vient ? C’est l’attaque des tringles à rideaux qui lui soutiennent son manteau ; manteau déchu là voilà nue, en tête à tête avec l’hiver et la rivière. C’est l’appel de la prière. 

Évidemment, il y a déjà le soleil qui lui brûle les écailles et les dorades qui lui écartent les sens. Elle ressent, son chant dorénavant. L’automne moissonne les bribes d’un sonar ensorcelé, qui pulse autant que vente l’amer. Le rugueux reprend son souffle et le merveilleux lui sert une coupe. C’est l’incidence de la lumière, merveille amère. Merveille amère, ainsi veille la mer. Sur son repos. Elle peut baisser la garde, dorénavant. Son silence est celui des mouettes qui planent au loin sur les collines de coquilles vides, qui s’en émancipent avides des aiguës du ciel. Alors elle chante une dernière fois sa peur d’autrefois. Le ciel la chante, elle plane, lucide et paisible. 

|| musique d'une réinterprétation de Vivaldi par Max Richter - Été III`
    },
    {
        name: "Haut, haut, autrement",
        slug: 'haut-haut-autrement',
        n: 8,
        id: 'Y3d6P28nBMk',
        vignette: new URL('../images/coPi/vignette-hautHaut.png', import.meta.url).href,
        description: `alors toutes firent leurs bagages
et s’en allèrent vers l’azur
soulever des tas de coques
aimer de nombreux ports.

l’hameçon leur pend à la glotte
mais qu’y faire, puisque le bleu
nous veut le bleu. 

certaines de leur cueillette
elles se vêtirent de quelques épaulettes
les machettes sont prêtes
je ne le suis pas

elles savent que la houle a le luxe du temps lent. 
que ce monde est trop grand, les murs trop blancs, l’héritier insolent.

larguez les déboires 
le sel m’est une fresque
digne des plus belles gorges.

essayé, elles ont essayé
d’y aller par la pointe des pieds.
mais ce qu’un coup de nez a de la vertu…
donc elles plient le linge, déplient l’attente,
s’efforcent d’arroser la menthe
je n’y vois plus qu’une attente

de sortir les machettes.
rendre bêtes les arrosoirs
couper les herbes perchées
haut, haut, autrement. 

déposer la garde, sur un quai de gare, bien assommée par un goudron intransigeant et chaud.

un bagage, oublié sous un banc. 
un air frais, le temps d’un instant.
descendre la rue sans jamais descendre le regard.

crier sur un decrescendo du vent.
elles ne veulent pas d’enfant.
pourquoi agir comme des enfants ; 
sans conscience
gésiers de démence
de sueurs froides et de brouillard.

|| musique par Caleb Arredondo - Echo Sax End`
    },
    {
        name: "La noyée",
        slug: 'la-noyée',
        n: 9,
        id: '2C3LtM5Y2wE',
        vignette: new URL('../images/coPi/vignette-laNoyée.png', import.meta.url).href,
        description:  `la lune est obscure dans les dents de la scie.
je m’y défie le front liquide, les tempes esseulées.

mes noyés nés avant l’arbre se réunissent un à un, seuls.
qu’un plongeur leur éponge un livre creux et c’est l’un qui a une peur, bleue, pendant que l’autre convoite l’unité des siens. « à demain ! » 
deux, les voilà deux désormais. 
on me dira que c’est chacun pour soi sur cette route de la soie, mais pas pour eux. trois pommes tombent de la commode et ceux sont six mains qui leur retrouvent un goût à la mode. les bouches font ce qu’elles ont à faire, et moi je rêve de n’être plus une, mais noyée par la foule. 
 foule sentimentale, 
  on a soif 
  d’idées noires… 

|| musiques par Yann Tiersen 

    ° Tempelhof
    ° La noyée`
    },

      {
        name: 'Bouhliwood',
        slug: 'bouhliwood',
        n: 10,
        id: 'nGHpTfJnKLs',
        vignette: new URL('../images/coPi/vignette-bouhliwood.png', import.meta.url).href,
        description:  `électrochoc, je brise le pare-choc
j’accoste un pylône, arrimé au bas-côté
de mes angoisses, de mon passé.

le pylône me dresse comme un poteau. je suis son drône.
avec lui, il n’y aura ni môme ni neurone. 
que de la détresse, qu’il porte en tresses sur son front.
son front de patron.

qu’on me surveille, qu’on me capture
moi seule veillerai
à courir
peu importe les points de côté 
puisque c’est sur le bas-côté que je l’ai rencontré, anesthésiée.

courir courir souffrir mourir
je n’en ai pas le droit
il sédate tout en moi
épie mes moindres épithètes
écrit mes maladresses.
1000 0011
ton algorithme fait un vacarme
ça y est, tu as pris mon âme

couler couler rouler fouler 
la terre humide par mes peurs
1101 0010
tu me connais par cœur
mais où as-tu caché le mien ?

les baleines prennent des somnifères
c’est la sentence de Lucifer. 

échappe-moi
écharpe-toi
car l’hiver s’annonce immortel
c’est écrit dans leurs ram
pendant que moi je rame
perdue dans les flots de l’amnésie.
amenez-y moi mes tortionnaires.
soyez des légions de fantassins pilonnés. 
venez m’attraper

échappe-moi
échardez-vous

éreinte-moi
poignardons-nous.

et ce tunnel m’entraîne de plus belle.
il m’évide tous mes évitements
j’esquive, il salive
car seul lui sait 
qu’il n’y a qu’une entrée 
celle de mon passé.

se laisser transporter 
par un porte-conteneurs ou un vautour blessé

aimer son tyran,
marcher dans le néant
qui à son tour perd espoir 
dans ce tunnel noir

il ne servira à rien de nier
que je leur appartiens
de l’amygdale jusqu’aux baisers
putain, ce que je me fais baiser. 

tarir tarir pétrir vomir
vos entreprises de contrôle
je suis la fièvre du moulin
buvez mon eau sacrée
0110 1001
c’est la rivière glacée 
qui coule dans vos veines
celles qui échafaudent mon tunnel.

sentinelle, ma belle sentinelle
pourquoi, mais pourquoi m’as-tu mise dans ce tunnel ?

 || musique par Afx - gwarek2`
    },

   
  
]

export default copiVideos;