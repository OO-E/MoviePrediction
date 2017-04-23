import numpy as np
from sklearn                        import metrics, svm
from sklearn.linear_model           import LinearRegression
from sklearn.linear_model           import LogisticRegression
from sklearn.tree                   import DecisionTreeClassifier
from sklearn.neighbors              import KNeighborsClassifier
from sklearn.discriminant_analysis  import LinearDiscriminantAnalysis
from sklearn.naive_bayes            import GaussianNB
from sklearn.svm                    import SVC

trainingData    = np.array([[1,2,3.8],[3,2,1],[1,1,1],[1,3,2]])#np.array([ [2.3, 4.3, 2],  [1.3, 5.2, 5.2],  [3.3, 2.9, 0.8],  [3.1, 4.3, 4.0]  ])
trainingScores  = np.array( [3, 1.1, 4.1, 1] )
predictionData  = np.array([ [2, 2.9, 2],  [1, 2, 2] ])



clf = LinearRegression()
clf.fit(trainingData, trainingScores)
print("LinearRegression")
print(clf.predict(predictionData))

clf = svm.SVR()
clf.fit(trainingData, trainingScores)
print("SVR")
print(clf.predict(predictionData))

#clf = LogisticRegression()

#int degerde cevap veremedi float degerlerdede cevap veremedi

#clf.fit(trainingData.values, trainingScores.values)
#print("LogisticRegression")
#print(clf.predict(predictionData))

#clf = DecisionTreeClassifier() #int degerlerde cevap verdi - float degerlerde cevap veremedi 2.1 gibi
#clf.fit(trainingData, trainingScores)
#print("DecisionTreeClassifier")
#print(clf.predict(predictionData))

#clf = KNeighborsClassifier() int olmadi
#clf.fit(trainingData, trainingScores)
#print("KNeighborsClassifier")
#print(clf.predict(predictionData))

#clf = LinearDiscriminantAnalysis() olmadi
#clf.fit(trainingData, trainingScores)
#print("LinearDiscriminantAnalysis")
#print(clf.predict(predictionData))

#clf = GaussianNB() olmadi float
#clf.fit(trainingData, trainingScores)
#print("GaussianNB")
#print(clf.predict(predictionData))

#clf = SVC()
#clf.fit(trainingData, trainingScores)
#print("SVC")
#print(clf.predict(predictionData))