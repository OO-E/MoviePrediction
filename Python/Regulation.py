
count = 201

def data(x):

    arr_Reg  = []

    for i in range(x.count()):

        if i%500 == 0:
               print ("data now ", i)

        arr_Row = []

        if x[i]["imdb_score"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["imdb_score"])

        if x[i]["num_critic_for_reviews"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["num_critic_for_reviews"])

        if x[i]["movie_facebook_likes"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["movie_facebook_likes"])

        if x[i]["aspect_ratio"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["aspect_ratio"])

        if x[i]["actor_2_facebook_likes"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["actor_2_facebook_likes"])

        if x[i]["title_year"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["title_year"])

        if x[i]["budget"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["budget"])

        if x[i]["num_user_for_reviews"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["num_user_for_reviews"])

        if x[i]["facenumber_in_poster"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["facenumber_in_poster"])

        if x[i]["cast_total_facebook_likes"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["cast_total_facebook_likes"])

        if x[i]["num_voted_users"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["num_voted_users"])

        if x[i]["gross"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["gross"])

        if x[i]["actor_1_facebook_likes"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["actor_1_facebook_likes"])

        if x[i]["actor_3_facebook_likes"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["actor_3_facebook_likes"])

        if x[i]["director_facebook_likes"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["director_facebook_likes"])

        if x[i]["duration"] == "":
            arr_Row.append(0)
        else:
            arr_Row.append(x[i]["duration"])



        arr_Reg.append(arr_Row)

    return arr_Reg


def oneData(x,i):

    arr_Row = []
    if x[i]["imdb_score"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["imdb_score"])

    if x[i]["num_critic_for_reviews"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["num_critic_for_reviews"])

    if x[i]["movie_facebook_likes"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["movie_facebook_likes"])

    if x[i]["aspect_ratio"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["aspect_ratio"])

    if x[i]["actor_2_facebook_likes"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["actor_2_facebook_likes"])

    if x[i]["title_year"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["title_year"])

    if x[i]["budget"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["budget"])

    if x[i]["num_user_for_reviews"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["num_user_for_reviews"])

    if x[i]["facenumber_in_poster"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["facenumber_in_poster"])

    if x[i]["cast_total_facebook_likes"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["cast_total_facebook_likes"])

    if x[i]["num_voted_users"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["num_voted_users"])

    if x[i]["gross"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["gross"])

    if x[i]["actor_1_facebook_likes"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["actor_1_facebook_likes"])

    if x[i]["actor_3_facebook_likes"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["actor_3_facebook_likes"])

    if x[i]["director_facebook_likes"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["director_facebook_likes"])

    if x[i]["duration"] == "":
        arr_Row.append(0)
    else:
        arr_Row.append(x[i]["duration"])

    return arr_Row


def dataScores(x):

    arr_Reg  = []

    for i in range(x.count()):
        xY = x[i]["imdb_score"]
        arr_Reg.append(xY)
        if i%500 == 0:
            print ("skor ", i)

    return arr_Reg















