from pymongo import MongoClient
import json
from tpot import TPOTClassifier
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.neural_network import MLPClassifier

import Regulation
from sklearn.preprocessing import StandardScaler



client = MongoClient()

client = MongoClient('mongodb://localhost:27017/')
db = client['admin']
collection = db['movie_metadatas']



find  = collection.find();



from sklearn import utils
from sklearn import preprocessing


xR = Regulation.data(find)
yR = Regulation.oneData(find,0)
sR = Regulation.dataScores(find)

import numpy as np
from sklearn                        import metrics, svm
from sklearn.linear_model           import LinearRegression
from sklearn.linear_model           import LogisticRegression
from sklearn.tree                   import DecisionTreeClassifier
from sklearn.neighbors              import KNeighborsClassifier
from sklearn.discriminant_analysis  import LinearDiscriminantAnalysis
from sklearn.naive_bayes            import GaussianNB
from sklearn.svm                    import SVC

trainingData    = np.array(xR)
trainingScores  =np.array(sR)
predictionData  = np.array(yR)


print trainingData
clf = LinearRegression()
clf.fit(trainingData, trainingScores)
print("LinearRegression")
print(clf.predict(predictionData))

clf = svm.SVR()
clf.fit(trainingData, trainingScores)
print("SVR")
print(clf.predict(predictionData))


"""
# Sample Decision Tree Classifier
from sklearn import datasets
from sklearn import metrics
from sklearn.tree import DecisionTreeClassifier
# load the iris datasets
dataset = datasets.load_iris()
# fit a CART model to the data
model = DecisionTreeClassifier()
model.fit(encodedX, encodedY)
#print(model)
# make predictions
expected = dataset.target
predicted = model.predict(encodedX)
# summarize the fit of the model
print(metrics.classification_report(expected, predicted))
#print(metrics.confusion_matrix(expected, predicted))
#print dataset.target#model.predict(dataset.data)

"""

"""
xR = Regulation.data(find)
yR = Regulation.dataScores(find)

print yR
print "====================================================================================="
print xR


clf = MLPClassifier(hidden_layer_sizes=(5, 16), random_state=1)
clf.fit(xR, yR)

MLPClassifier(activation='relu',
              alpha=1e-05,
              batch_size='auto',
              beta_1=0.9,
              beta_2=0.999,
              early_stopping=False,
              epsilon=1e-08,
              hidden_layer_sizes=(5, 16),
              learning_rate='constant',
              learning_rate_init=0.001,
              max_iter=200,
              momentum=0.9,
              nesterovs_momentum=True,
              power_t=0.5,
              random_state=1,
              shuffle=True,
              solver='lbfgs',
              tol=0.0001,
              validation_fraction=0.1,
              verbose=False,
              warm_start=False)


pR = Regulation.oneData(find,0)
print ("================================================================gelen data" , pR)

print "======================================tahmin ediyor"
prd = clf.predict(pR)
print "=================tahmin sonucu"
print prd

"""