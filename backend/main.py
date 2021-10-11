from fastapi import FastAPI
from coderhub_stats import CoderHubStats
from fastapi.middleware.cors import CORSMiddleware


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