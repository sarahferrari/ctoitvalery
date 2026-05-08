# Site de test
https://sarahferrari.github.io/ctoitvalery/

# Cloner le répértoire git

git config --global user.email "sarah73756@gmail.com"
git clone https://github.com/sarahferrari/ctoitvalery.git

Attention: il faut acceptez le clonage lors de la demande !

# Ajouter ou modifier le projet et l'envoyer

git add .
git commit -m "mise à jour"
git push

# Push le nouveau répertoire local en entier

cd AuditTools
git init
git remote remove origin
git remote add origin https://github.com/sarahferrari/ctoitvalery.git
git add .
git commit -m "clean project"
git branch -M main
git push -u origin main --force