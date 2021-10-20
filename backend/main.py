import io
from fastapi import FastAPI
from coderhub_stats import CoderHubStats
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse

stats = CoderHubStats()
app = FastAPI()

# cors configuration for all ports
origins = [
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/top10_users_data")
async def root():
    top_users_data = stats.get_top_users_stats()
    return top_users_data.to_dict()

@app.get("/challenges_data")
async def root():
    challenges = stats.get_challenges_stats()
    return challenges

@app.get("/top1_users_data")
async def root():
    top_users_data = stats.get_top_users_stats()
    top_users_data = top_users_data.drop_duplicates(subset=['language'])
    return top_users_data.to_dict()

@app.get("/top10_file")
async def root():
    """
    
    prepare top10 users sheet file to be downlaoded
    
    Return : sheetfile as stream respponse
    """
    top_users_data = stats.get_top_users_stats()
    stream = io.StringIO()

    top_users_data.to_csv(stream)

    response = StreamingResponse(iter([stream.getvalue()]),media_type="text/csv")

    response.headers["Content-Disposition"] = "attachment; filename=coderhub_top10_data.csv"

    return response

@app.get("/rank1_file")
async def root():
    """
    
    prepare top10 users sheet file to be downlaoded
    
    Return : sheetfile as stream respponse
    """
    top_users_data = stats.get_top_users_stats()
    top_users_data = top_users_data.drop_duplicates(subset=['language'])
    stream = io.StringIO()

    top_users_data.to_csv(stream)

    response = StreamingResponse(iter([stream.getvalue()]),media_type="text/csv")

    response.headers["Content-Disposition"] = "attachment; filename=coderhub_rank1_data.csv"

    return response

@app.get("/user_data/{username}")
async def root(username):
    try :
        response = stats.get_user_stats(username)
        return response.to_dict()
    except:
        response = "User not found or user profile is  private"
        return response

@app.get("/user_file/{username}")
async def root(username):
    try :
        stream = io.StringIO()
        user_data = stats.get_user_stats(username)
        user_data.to_csv(stream)
        
        response = StreamingResponse(iter([stream.getvalue()]),media_type="text/csv")

        response.headers["Content-Disposition"] = "attachment; filename=coderhub_rank1_data.csv"

        return response
    except:
        response = "User not found or user profile is  private"
        return response
